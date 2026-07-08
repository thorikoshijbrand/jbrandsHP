"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type ScaleOption = { value: number; label: string }
type RangeResult = {
  min: number
  max: number
  label: string
  summary: string
  action: string
}
type TotalRangeResult = {
  min: number
  max: number
  label: string
  headline: string
  description: string
  tone: "stable" | "warn" | "danger"
}
type Category = {
  key: string
  title: string
  icon: string
  questions: string[]
  ranges: RangeResult[]
}

type FlatQuestion = {
  id: string
  categoryKey: string
  categoryTitle: string
  question: string
}

type CategoryScore = Category & {
  score: number
  result: RangeResult
}

const scaleOptions: ScaleOption[] = [
  { value: 6, label: "非常にそう思う" },
  { value: 5, label: "そう思う" },
  { value: 4, label: "ややそう思う" },
  { value: 3, label: "ややそう思わない" },
  { value: 2, label: "そう思わない" },
  { value: 1, label: "まったくそう思わない" },
]

const circleSizes = [64, 54, 44, 44, 54, 64]

function getCircleTone(index: number) {
  if (index <= 2) {
    return {
      border: "border-emerald-500",
      text: "text-emerald-600",
      selected: "bg-emerald-500 border-emerald-500 text-white",
      hover: "hover:bg-emerald-50",
    }
  }

  return {
    border: "border-violet-500",
    text: "text-violet-600",
    selected: "bg-violet-500 border-violet-500 text-white",
    hover: "hover:bg-violet-50",
  }
}

function getSelectedOptionLabel(value?: number) {
  if (!value) return "未選択"
  return scaleOptions.find((option) => option.value === value)?.label ?? "未選択"
}

const categories: Category[] = [
  {
    key: "visibility",
    title: "見える化不足",
    icon: "📊",
    questions: [
      "システム開発や導入の進捗について報告を受けても、何が順調で何が問題なのかを把握しにくい。",
      "案件の全体像を社長として一言で説明しようとしても、目的・状況・課題を整理して話しにくい。",
    ],
    ranges: [
      { min: 2, max: 4, label: "問題は小さい", summary: "案件の目的・状況・課題が、経営から見ても比較的把握しやすい状態です。進捗の見え方は大きく崩れていません。", action: "報告内容を『進んだこと』だけでなく、『判断が必要なこと』まで含めて整理し続けてください。" },
      { min: 5, max: 7, label: "軽い兆候あり", summary: "進捗は見えていても、問題点や論点の見え方に少し曖昧さが出始めている可能性があります。", action: "目的・現状・課題・次の判断事項を、経営目線で一枚に整理できる状態を目指してください。" },
      { min: 8, max: 9, label: "要注意", summary: "報告を受けても、何が順調で何が危険なのかを判断しにくい状態になり始めています。", action: "進捗報告の形式を見直し、『事実』『課題』『判断待ち』を分けて見えるようにしてください。" },
      { min: 10, max: 12, label: "強い問題あり", summary: "案件の全体像が見えず、経営として状況をつかみにくい状態です。", action: "報告の仕組みそのものを見直し、案件の目的・現在地・課題・意思決定ポイントを明確に可視化してください。" },
    ],
  },
  {
    key: "vendor",
    title: "ベンダー依存",
    icon: "🛡️",
    questions: [
      "ベンダーからの説明や提案について、その妥当性を社内で十分に判断しにくい。",
      "案件の重要な判断が、自社よりもベンダー主導で進んでいると感じることがある。",
    ],
    ranges: [
      { min: 2, max: 4, label: "問題は小さい", summary: "ベンダーとの関係は比較的健全で、自社として判断の軸を持てている状態です。", action: "自社で決めることとベンダーに委ねることの線引きを今後も明確にしてください。" },
      { min: 5, max: 7, label: "軽い兆候あり", summary: "一部で、ベンダーの説明や提案をそのまま受け入れやすい状況が出始めている可能性があります。", action: "『ベンダーに確認すること』と『自社で先に決めること』を整理してください。" },
      { min: 8, max: 9, label: "要注意", summary: "重要な判断が、自社ではなくベンダー主導で進みやすい状態です。", action: "提案の妥当性を検討するための社内基準と、意思決定の責任者を明確にしてください。" },
      { min: 10, max: 12, label: "強い問題あり", summary: "案件の主導権をかなりベンダー側に依存している可能性があります。", action: "『何を自社で決めるべきか』を取り戻し、経営判断の構造から立て直してください。" },
    ],
  },
  {
    key: "agreement",
    title: "合意・完成基準の曖昧さ",
    icon: "🎯",
    questions: [
      "『何をもって完成とするか』が、社内で十分に明確になっていないと感じる。",
      "現場・管理職・経営の間で、この案件で何を目指しているのかに認識のズレが起きやすい。",
    ],
    ranges: [
      { min: 2, max: 4, label: "問題は小さい", summary: "何を目指し、何をもって完成とするかについて、大きなズレは生じにくい状態です。", action: "目的・対象範囲・完了条件を言語化し、今後も認識ズレを防いでください。" },
      { min: 5, max: 7, label: "軽い兆候あり", summary: "大きな混乱はないものの、完成イメージや目的に少し曖昧さが残っている可能性があります。", action: "完成基準と対象範囲を、関係者が同じ言葉で説明できる状態にしてください。" },
      { min: 8, max: 9, label: "要注意", summary: "何を作るのか、どこまでやれば完了なのかが曖昧になり始めている状態です。", action: "目的、対象範囲、除外事項、完成条件を明文化し、社内で揃えてください。" },
      { min: 10, max: 12, label: "強い問題あり", summary: "案件のゴールや完成基準がかなり曖昧な状態です。", action: "『何を作るか』より先に、『何をもって成功・完了とするか』を定義し直してください。" },
    ],
  },
  {
    key: "decision",
    title: "意思決定・会議の弱さ",
    icon: "🧭",
    questions: [
      "会議をしても、何が決まり、何が未決のままなのかが曖昧になりやすい。",
      "問題が起きたときに、誰が判断し、誰が責任を持って動くのかが分かりにくい。",
    ],
    ranges: [
      { min: 2, max: 4, label: "問題は小さい", summary: "会議や判断の進め方は比較的整理されており、誰が何を決めるかも大きくは崩れていない状態です。", action: "会議ごとに決定事項と未決事項を明確に残し続けてください。" },
      { min: 5, max: 7, label: "軽い兆候あり", summary: "会議は機能しているものの、決定事項や責任の所在にやや曖昧さが残り始めている可能性があります。", action: "会議の目的を『報告』か『判断』かで分け、意思決定の流れを整理してください。" },
      { min: 8, max: 9, label: "要注意", summary: "会議をしても何が決まり、何が未決なのかが曖昧になりやすい状態です。", action: "議題・決定事項・宿題・責任者を明確にする会議設計が必要です。" },
      { min: 10, max: 12, label: "強い問題あり", summary: "意思決定の構造が弱く、会議が『集まって話す場』で止まっている可能性があります。", action: "会議体そのものを見直し、『誰が・何を・いつ決めるか』をはっきりさせてください。" },
    ],
  },
  {
    key: "dependency",
    title: "属人化・継続性リスク",
    icon: "📝",
    questions: [
      "特定の担当者がいないと、案件の状況や経緯が分からなくなりやすい。",
      "要件や判断の経緯が十分に文書化されず、口頭や個人の記憶に依存して進んでいると感じる。",
    ],
    ranges: [
      { min: 2, max: 4, label: "問題は小さい", summary: "案件の状況や判断経緯が、特定の個人だけに閉じずに共有されている状態です。", action: "要件・経緯・判断理由を継続的に記録し、引き継げる形を維持してください。" },
      { min: 5, max: 7, label: "軽い兆候あり", summary: "一部で、特定の担当者への依存が生まれ始めている可能性があります。", action: "文書化と共有のルールを早めに整えてください。" },
      { min: 8, max: 9, label: "要注意", summary: "案件の状況や判断経緯が、かなり人に依存している状態です。", action: "要件、議論、判断理由を個人の記憶ではなく、組織の記録として残してください。" },
      { min: 10, max: 12, label: "強い問題あり", summary: "案件が特定の担当者の記憶や力量に大きく依存している状態です。", action: "記録・共有・引き継ぎの仕組みを優先的に立て直してください。" },
    ],
  },
]

const totalRanges: TotalRangeResult[] = [
  { min: 10, max: 19, label: "安心", headline: "現時点では、大きな崩れは見えにくい状態です。", description: "システム開発・導入の進め方に大きな崩れは見えにくい状態です。ただし、案件が大きくなると属人化や判断の曖昧さが表面化することもあるため、定期的な見直しは有効です。", tone: "stable" },
  { min: 20, max: 29, label: "概ね健全", headline: "大きな問題は見えにくい一方で、芽はあります。", description: "一部に曖昧さや依存の芽があります。今のうちに整理しておけば、大きなトラブルを防ぎやすい状態です。", tone: "stable" },
  { min: 30, max: 39, label: "要注意", headline: "すでにズレや依存が起き始めている可能性があります。", description: "認識ズレ・判断の曖昧さ・ベンダー依存などが起き始めている可能性があります。この段階で手を打てば立て直しやすいですが、放置すると案件が崩れやすくなります。", tone: "warn" },
  { min: 40, max: 49, label: "危険", headline: "案件そのものより、進め方の構造に問題がある可能性が高いです。", description: "追加費用、納期遅延、責任の押し付け合いが起きやすくなる状態です。", tone: "warn" },
  { min: 50, max: 55, label: "かなり危険", headline: "部分修正ではなく、進め方全体の見直しが必要な段階です。", description: "主導権不足、社内認識のズレ、属人化などがかなり深刻になっている恐れがあります。", tone: "danger" },
  { min: 56, max: 60, label: "非常に危険", headline: "案件が進んでいるように見えても、実際にはかなり不安定です。", description: "このまま進めると、大きな失敗や混乱につながるリスクが高い状態です。", tone: "danger" },
]

const audience = [
  "システム導入・開発を進めている",
  "ベンダーの説明が正しいか判断しにくい",
  "社内で認識ズレや責任の曖昧さを感じる",
  "情シスや担当者に依存していて不安がある",
]

function getCategoryResult(score: number, category: Category): RangeResult {
  return category.ranges.find((range) => score >= range.min && score <= range.max) ?? category.ranges[0]
}

function getTotalResult(score: number): TotalRangeResult {
  return totalRanges.find((range) => score >= range.min && score <= range.max) ?? totalRanges[0]
}

function getToneStyles(tone: TotalRangeResult["tone"]) {
  if (tone === "danger") {
    return { badge: "bg-red-50 text-red-700 border-red-200", card: "border-red-200 bg-red-50/60", accent: "text-red-700" }
  }
  if (tone === "warn") {
    return { badge: "bg-amber-50 text-amber-700 border-amber-200", card: "border-amber-200 bg-amber-50/60", accent: "text-amber-700" }
  }
  return { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", card: "border-emerald-200 bg-emerald-50/60", accent: "text-emerald-700" }
}

function buildFlatQuestions(): FlatQuestion[] {
  return categories.flatMap((category) =>
    category.questions.map((question, index) => ({
      id: `${category.key}-${index + 1}`,
      categoryKey: category.key,
      categoryTitle: category.title,
      question,
    }))
  )
}

function calculateCategoryScores(answers: Record<string, number>, flatQuestions: FlatQuestion[]): CategoryScore[] {
  return categories.map((category) => {
    const score = flatQuestions
      .filter((question) => question.categoryKey === category.key)
      .reduce((sum, question) => sum + (answers[question.id] ?? 0), 0)

    return {
      ...category,
      score,
      result: getCategoryResult(score, category),
    }
  })
}

function buildCopyText(totalScore: number, totalResult: TotalRangeResult, priorityCategories: CategoryScore[], categoryScores: CategoryScore[]) {
  const priorityText = priorityCategories.length > 0 ? priorityCategories.map((c) => c.title).join("、") : "点数が高かったカテゴリ"
  const categoryText = categoryScores
    .map(
      (category) =>
        `【${category.title}】 ${category.score}点 / 12点\n判定：${category.result.label}\n${category.result.summary}\n見直しの方向：${category.result.action}`
    )
    .join("\n\n")

  return [
    "システム開発健康度チェック 診断結果",
    `総合点：${totalScore}点 / 60点`,
    `総合判定：${totalResult.label}`,
    totalResult.headline,
    totalResult.description,
    "",
    `優先的に見直すべきカテゴリ：${priorityText}`,
    "",
    "カテゴリ別結果",
    categoryText,
  ].join("\n")
}

function runSelfTests() {
  const flat = buildFlatQuestions()
  console.assert(flat.length === 10, "Self-test failed: expected 10 questions.")

  const minAnswers = Object.fromEntries(flat.map((q) => [q.id, 1]))
  const maxAnswers = Object.fromEntries(flat.map((q) => [q.id, 6]))

  const minScores = calculateCategoryScores(minAnswers, flat)
  const maxScores = calculateCategoryScores(maxAnswers, flat)

  const minTotal = minScores.reduce((sum, category) => sum + category.score, 0)
  const maxTotal = maxScores.reduce((sum, category) => sum + category.score, 0)

  console.assert(minTotal === 10, "Self-test failed: minimum total score should be 10.")
  console.assert(maxTotal === 60, "Self-test failed: maximum total score should be 60.")
  console.assert(getTotalResult(10).label === "安心", "Self-test failed: score 10 should be 安心.")
  console.assert(getTotalResult(60).label === "非常に危険", "Self-test failed: score 60 should be 非常に危険.")
  console.assert(getCategoryResult(2, categories[0]).label === "問題は小さい", "Self-test failed: category score 2 should be 問題は小さい.")
  console.assert(getCategoryResult(12, categories[0]).label === "強い問題あり", "Self-test failed: category score 12 should be 強い問題あり.")
  console.assert(buildCopyText(38, getTotalResult(38), maxScores.slice(0, 2), maxScores).includes("カテゴリ別結果"), "Self-test failed: copy text should include header.")
}

export default function SystemDevHealthCheckPage() {
  const flatQuestions = useMemo(() => buildFlatQuestions(), [])
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as { __healthCheckSelfTestRan?: boolean }).__healthCheckSelfTestRan) {
      (window as { __healthCheckSelfTestRan?: boolean }).__healthCheckSelfTestRan = true
      runSelfTests()
    }
  }, [])

  const answeredCount = Object.keys(answers).length
  const progress = Math.round((answeredCount / flatQuestions.length) * 100)
  const allAnswered = answeredCount === flatQuestions.length

  const categoryScores = useMemo(() => calculateCategoryScores(answers, flatQuestions), [answers, flatQuestions])
  const totalScore = categoryScores.reduce((sum, category) => sum + category.score, 0)
  const totalResult = getTotalResult(totalScore || 10)
  const toneStyles = getToneStyles(totalResult.tone)
  const priorityCategories = [...categoryScores].sort((a, b) => b.score - a.score).filter((category) => category.score > 0).slice(0, 2)

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleShowResults = () => {
    if (!allAnswered) return
    setShowResults(true)
    setTimeout(() => scrollToId("results"), 100)
  }

  const handleCopyResults = async () => {
    try {
      const text = buildCopyText(totalScore, totalResult, priorityCategories, categoryScores)
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea")
        textarea.value = text
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy results", error)
    }
  }

  const handleRestart = () => {
    setAnswers({})
    setShowResults(false)
    setCopied(false)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium text-white">社長向け・2分診断</span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
                システム開発が
                <br className="hidden md:block" />
                危ない会社には、
                <br className="hidden md:block" />
                共通する<span className="text-cyan-300">"崩れ方"</span>があります。
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                ベンダー依存、認識ズレ、完成基準の曖昧さ。
                この2分診断で、御社の進め方にどの程度のリスクがあるかを可視化します。
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">回答時間：約2分</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">全10問</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">無料</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">その場で結果表示</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToId("questions")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                今すぐ診断を始める <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-bold text-white">こんな社長向けです</h2>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              開発や導入が順調に見えても、進め方の構造に問題が潜んでいることがあります。
            </p>
            <div className="mt-6 grid gap-3">
              {audience.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 text-cyan-300" aria-hidden="true">✓</span>
                  <p className="text-sm leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="mx-auto max-w-7xl px-6 pb-8 md:px-8">
        <div className="sticky top-0 z-20 mb-6 rounded-[24px] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">診断の進捗</div>
              <div className="text-lg font-semibold text-slate-900">
                {answeredCount} / {flatQuestions.length} 問 回答済み
              </div>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              未回答があると結果は表示されません
            </span>
          </div>
          <div className="w-full overflow-hidden rounded-full bg-slate-200 h-3">
            <div className="h-full rounded-full bg-slate-900 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.key} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-slate-100 p-3 text-lg" aria-hidden="true">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">2問 / 2点〜12点</p>
                </div>
              </div>
              <div className="space-y-6">
                {category.questions.map((question, index) => {
                  const questionId = `${category.key}-${index + 1}`
                  const answer = answers[questionId]
                  return (
                    <div key={questionId} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <div className="mb-4 flex items-start gap-3">
                        <span className="mt-1 inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                          {flatQuestions.findIndex((q) => q.id === questionId) + 1}
                        </span>
                        <p className="text-base font-medium leading-7 text-slate-900">{question}</p>
                      </div>

                      <div className="rounded-[24px] bg-white px-4 py-5 sm:px-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <div className="text-base font-medium text-emerald-600 lg:w-40 lg:text-left">非常にそう思う</div>

                          <div className="flex flex-1 items-center justify-center gap-3 sm:gap-5">
                            {scaleOptions.map((option, optionIndex) => {
                              const selected = answer === option.value
                              const tone = getCircleTone(optionIndex)
                              const size = circleSizes[optionIndex]

                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => handleAnswer(questionId, option.value)}
                                  aria-label={`${option.value}点: ${option.label}`}
                                  title={`${option.value}点: ${option.label}`}
                                  className={`flex items-center justify-center rounded-full border-4 transition-all duration-150 ${
                                    selected ? `${tone.selected} scale-105 shadow-md` : `bg-white ${tone.border} ${tone.text} ${tone.hover}`
                                  }`}
                                  style={{ width: size, height: size }}
                                >
                                  <span className="text-sm font-semibold">{option.value}</span>
                                </button>
                              )
                            })}
                          </div>

                          <div className="text-base font-medium text-violet-600 lg:w-40 lg:text-right">まったくそう思わない</div>
                        </div>

                        <div className="mt-4 text-center text-sm text-slate-500">
                          現在の選択：
                          <span className="font-semibold text-slate-700">{answer ? `${answer}点 / ${getSelectedOptionLabel(answer)}` : "未選択"}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-600">すべての設問に回答すると、その場で総合判定とカテゴリ別の見直しポイントが表示されます。</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              回答をリセット
            </button>
            <button
              type="button"
              disabled={!allAnswered}
              onClick={handleShowResults}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              診断結果を見る <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results" className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-8">
          <div className={`rounded-[32px] border p-6 shadow-sm ${toneStyles.card}`}>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium ${toneStyles.badge}`}>総合判定：{totalResult.label}</span>
                <span className="text-sm text-slate-600">10点〜60点で判定</span>
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <div className="text-sm font-medium text-slate-500">あなたの診断結果</div>
                  <div className="mt-2 text-5xl font-bold tracking-tight text-slate-950">{totalScore}点</div>
                  <div className="mt-1 text-sm text-slate-500">/ 60点</div>
                </div>
                <div className="space-y-2">
                  <h2 className={`text-2xl font-bold leading-tight ${toneStyles.accent}`}>{totalResult.headline}</h2>
                  <p className="text-base leading-7 text-slate-700">{totalResult.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900">優先的に見直すべきカテゴリ</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">点数が高いカテゴリほど、構造的な崩れが大きい可能性があります。</p>
              <div className="mt-6 flex-1 space-y-4">
                {priorityCategories.map((category, index) => (
                  <div key={category.key} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl bg-white p-3 text-lg shadow-sm" aria-hidden="true">
                        {category.icon}
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">優先度 {index + 1}</div>
                        <div className="text-lg font-semibold text-slate-900">{category.title}</div>
                      </div>
                      <div className="ml-auto rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">{category.score} / 12</div>
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{category.result.summary}</p>
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-900">見直しの方向：{category.result.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col overflow-hidden">
              <h2 className="text-2xl font-bold text-slate-900">次の一手</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">結果を眺めるだけでは変わりません。どこが曖昧で、どこで主導権を失っているかを切り分ける必要があります。</p>
              <div className="mt-6 flex flex-1 flex-col space-y-5">
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  <p>
                    この結果なら、まず整理すべきは
                    <span className="font-semibold text-slate-900">
                      {priorityCategories.length > 0 ? `「${priorityCategories.map((c) => c.title).join("」と「")}」` : "点数が高かったカテゴリ"}
                    </span>
                    です。
                  </p>
                  <p className="mt-3">30分あれば、御社の案件でどこが弱っているか、次に何をすべきかを一緒に整理できます。</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                  <p className="font-medium text-slate-900">診断結果をコピーしてフォームに張り付けてください</p>
                  <button
                    type="button"
                    onClick={handleCopyResults}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    {copied ? "診断結果をコピーしました" : "診断結果をコピーする"}
                  </button>
                </div>

                <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    診断結果をもとに、30分で整理する
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">カテゴリ別スコア</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">総合点だけではなく、崩れ方の種類まで見てください。</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {categoryScores.map((category) => (
                <div key={category.key} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-3 text-lg shadow-sm" aria-hidden="true">
                      {category.icon}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{category.title}</div>
                      <div className="text-sm text-slate-500">{category.score} / 12点</div>
                    </div>
                    <span className="ml-auto inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                      {category.result.label}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{category.result.summary}</p>
                  <div className="my-4 h-px w-full bg-slate-200" />
                  <p className="text-sm font-medium leading-7 text-slate-900">見直しの方向：{category.result.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900 p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <p className="text-lg font-semibold text-white">診断結果をもとに、次の一手を30分で整理できます</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">どこが曖昧か、どこで主導権を失っているかを一緒に切り分けます。</p>
              </div>
              <a
                href="/contact"
                className="w-full shrink-0 justify-center lg:w-auto lg:min-w-[320px] inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                診断結果をもとに、30分で整理する
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
