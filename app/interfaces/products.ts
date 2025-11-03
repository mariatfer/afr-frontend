import type { Category } from '@/interfaces/navbar'
import type { Image, Hero, Carousel, QuoteForm, AccordionItem } from '@/interfaces/common'
import type { SEO } from '@/interfaces/seo'

export interface Product {
  id: number
  category: Category
  name: string
  description: string
  slug: string
  title: string
  productImage: Image
  available: boolean
  productCarousel: Carousel[]
  accordion: AccordionItem[]
  seo: SEO
}

export interface ProductsPage {
  hero: Hero
  seo: SEO
}
export interface AvailableSoon {
  title: string
  description: string
}
export interface ProductLocales {
  quoteForm: QuoteForm
  availableSoon: AvailableSoon
}
