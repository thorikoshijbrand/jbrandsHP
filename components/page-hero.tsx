import Image from "next/image"

interface PageHeroProps {
  title: string
  titleImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
  description?: string
  backgroundImage: string
  backgroundAlt?: string
}

export function PageHero({ title, titleImage, description, backgroundImage, backgroundAlt = "Hero background" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-800 py-24 lg:py-32 -mt-16 pt-40 lg:pt-48">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={backgroundAlt}
        fill
        className="object-cover opacity-70"
        priority
      />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {titleImage ? (
            <div className="flex justify-center">
              <Image
                src={titleImage.src}
                alt={titleImage.alt}
                width={titleImage.width}
                height={titleImage.height}
                className="h-auto max-w-full"
                priority
              />
            </div>
          ) : (
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance font-serif">
              {title}
            </h1>
          )}
          {description && <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">{description}</p>}
        </div>
      </div>
    </section>
  )
}
