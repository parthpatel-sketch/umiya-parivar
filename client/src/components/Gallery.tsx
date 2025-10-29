// import { useState } from "react"
// import { useQuery, useMutation } from "@tanstack/react-query"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Upload, Eye, Filter, Plus } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"
// import { queryClient } from "@/lib/queryClient"
// import { type GalleryImage, type InsertGalleryImage } from "@shared/schema"
// import templeExteriorImage from "@assets/generated_images/Hindu_temple_exterior_view_998b9df4.png"
// import templeInteriorImage from "@assets/generated_images/Temple_interior_sanctum_d37f8a91.png"
// import templeFestivalImage from  "/videos/Temple_festival_celebration_a4efb609.png";
// import templeArchitectureImage from "@assets/generated_images/Temple_architectural_details_5b1e0797.png"

// // Map generated images to categories for display
// const categoryImageMap: Record<string, string> = {
//   Architecture: templeExteriorImage,
//   Interior: templeInteriorImage,
//   Events: templeFestivalImage,
//   Festivals: templeFestivalImage,
//   Community: templeFestivalImage,
// }

// const categories = ["All", "Architecture", "Interior", "Events", "Festivals", "Community"]

// export function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
//   const [showUploadForm, setShowUploadForm] = useState(false)
//   const [newImageData, setNewImageData] = useState<InsertGalleryImage>({
//     title: "",
//     category: "Events",
//     description: "",
//     src: ""
//   })
//   const { toast } = useToast()

//   const { data: galleryImages = [], isLoading } = useQuery<GalleryImage[]>({
//     queryKey: ["/api/gallery"],
//   })

//   const createImageMutation = useMutation({
//     mutationFn: async (imageData: InsertGalleryImage) => {
//       const response = await fetch("/api/gallery", {
//         method: "POST",
//         body: JSON.stringify(imageData),
//         headers: { "Content-Type": "application/json" }
//       })
//       if (!response.ok) throw new Error("Failed to create image")
//       return response.json()
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["/api/gallery"] })
//       setShowUploadForm(false)
//       setNewImageData({ title: "", category: "Events", description: "", src: "" })
//       toast({ title: "Success", description: "Image added successfully!" })
//     },
//     onError: () => {
//       toast({ title: "Error", description: "Failed to add image", variant: "destructive" })
//     }
//   })

//   const filteredImages = selectedCategory === "All" 
//     ? galleryImages 
//     : galleryImages.filter((img: GalleryImage) => img.category === selectedCategory)

//   const handleImageClick = (image: GalleryImage) => {
//     setSelectedImage(image)
//     console.log("Opening image modal:", image.title)
//   }

//   const handleUpload = () => {
//     // Use category-mapped image for demonstration
//     const imageWithSrc = {
//       ...newImageData,
//       src: categoryImageMap[newImageData.category] || templeExteriorImage
//     }
//     createImageMutation.mutate(imageWithSrc)
//   }

//   if (isLoading) {
//     return (
//       <section className="py-16 bg-muted/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-muted-foreground">Loading gallery...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Temple Gallery
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Explore the beauty of our temple through photographs capturing sacred moments, 
//             architectural splendor, and joyful celebrations of our community.
//           </p>
//         </div>

//         {/* Controls */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//           <div className="flex items-center gap-2">
//             <Filter className="h-4 w-4 text-muted-foreground" />
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={selectedCategory === category ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => setSelectedCategory(category)}
//                   data-testid={`button-filter-${category.toLowerCase()}`}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>
          
//           <Button 
//             onClick={() => setShowUploadForm(!showUploadForm)}
//             data-testid="button-upload-image"
//             className="flex items-center gap-2"
//           >
//             <Upload className="h-4 w-4" />
//             Upload Image
//           </Button>
//         </div>

//         {/* Upload Form */}
//         {showUploadForm && (
//           <Card className="mb-8">
//             <CardContent className="p-6">
//               <h3 className="font-serif text-xl font-semibold mb-4">Upload New Image</h3>
//               <div className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input
//                     placeholder="Image Title"
//                     value={newImageData.title}
//                     onChange={(e) => setNewImageData({...newImageData, title: e.target.value})}
//                     data-testid="input-image-title"
//                   />
//                   <select 
//                     className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
//                     value={newImageData.category}
//                     onChange={(e) => setNewImageData({...newImageData, category: e.target.value})}
//                     data-testid="select-image-category"
//                   >
//                     <option value="Architecture">Architecture</option>
//                     <option value="Interior">Interior</option>
//                     <option value="Events">Events</option>
//                     <option value="Festivals">Festivals</option>
//                     <option value="Community">Community</option>
//                   </select>
//                 </div>
//                 <Input
//                   placeholder="Image Description"
//                   value={newImageData.description}
//                   onChange={(e) => setNewImageData({...newImageData, description: e.target.value})}
//                   data-testid="input-image-description"
//                 />
//                 <div className="flex gap-2">
//                   <Button 
//                     onClick={handleUpload} 
//                     disabled={createImageMutation.isPending}
//                     data-testid="button-save-image"
//                   >
//                     {createImageMutation.isPending ? "Saving..." : "Save Image"}
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     onClick={() => setShowUploadForm(false)}
//                     data-testid="button-cancel-upload"
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Image Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredImages.map((image: GalleryImage) => (
//             <Card 
//               key={image.id} 
//               className="hover-elevate cursor-pointer overflow-hidden group"
//               onClick={() => handleImageClick(image)}
//               data-testid={`image-card-${image.id}`}
//             >
//               <div className="relative">
//                 <img 
//                   src={categoryImageMap[image.category] || image.src} 
//                   alt={image.title}
//                   className="w-full h-48 object-cover transition-transform group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
//                   <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </div>
//                 <Badge className="absolute top-2 right-2" variant="secondary">
//                   {image.category}
//                 </Badge>
//               </div>
//               <CardContent className="p-4">
//                 <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
//                 <p className="text-xs text-muted-foreground line-clamp-2">
//                   {image.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Modal for Selected Image */}
//         {selectedImage && (
//           <div 
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
//             onClick={() => setSelectedImage(null)}
//             data-testid="image-modal"
//           >
//             <div className="max-w-4xl max-h-full bg-background rounded-lg overflow-hidden">
//               <img 
//                 src={categoryImageMap[selectedImage.category] || selectedImage.src} 
//                 alt={selectedImage.title}
//                 className="w-full h-auto"
//               />
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-serif text-xl font-semibold">{selectedImage.title}</h3>
//                   <Badge variant="secondary">{selectedImage.category}</Badge>
//                 </div>
//                 <p className="text-muted-foreground">{selectedImage.description}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Filter } from "lucide-react"
import { type GalleryImage } from "@shared/schema"

const categories = ["All", "Architecture", "Interior", "Events", "Festivals", "Community"]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const { data: galleryImages = [], isLoading } = useQuery<GalleryImage[]>({
    queryKey: ["/api/gallery"],
  })

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
