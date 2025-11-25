import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Filter } from "lucide-react"
import { type GalleryImage } from "@shared/schema"
import { getGallery } from "../lib/api"; 

const categories = ["All", "Architecture", "Interior", "Events", "Festivals", "Community"]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

 const { data: galleryImages = [], isLoading, error } = useQuery<GalleryImage[]>({
  queryKey: ["gallery"],
  queryFn: getGallery,
});

if (isLoading) return <p>Loading gallery...</p>;
if (error) return <p className="text-red-500">Failed to load gallery images.</p>;


  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img: GalleryImage) => img.category === selectedCategory)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Temple Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the beauty of our temple through photographs capturing sacred moments, 
            architectural splendor, and joyful celebrations of our community.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image: GalleryImage) => (
            <Card 
              key={image.id} 
              className="hover-elevate cursor-pointer overflow-hidden group"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {image.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full bg-background rounded-lg overflow-hidden">
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold">{selectedImage.title}</h3>
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                </div>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


