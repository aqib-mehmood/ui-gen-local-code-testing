"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const dynamicImages = [
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
]

const Gallery = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const staticImages = [
      'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-JDslxmClHBQo8F66vp6TeQEV.png?st=2024-11-28T12%3A13%3A11Z&se=2024-11-28T14%3A13%3A11Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-28T03%3A11%3A05Z&ske=2024-11-29T03%3A11%3A05Z&sks=b&skv=2024-08-04&sig=mNvDugCWQsp/aaY3hrLjqQ97OB4j2C9akmaYbpzLfts%3D',

    ]
    
    const allImages = [...staticImages, ...dynamicImages]
    setImages(allImages)
  }, [])

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
          {src.startsWith('/static/') ? (
            <img src={src} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
          ) : (
            <Image
              src={src}
              alt={`Dynamic Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Image Gallery</h1>
      <Gallery />
    </div>
  )
}