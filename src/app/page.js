'use client'
import React, { useState } from "react";
import Card from "../components/Card";
import professionalsData from "../../data/professionalsData"


export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("therapists");

  const categories = Object.keys(professionalsData);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Better Together</h1>
          <nav>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* Category Selector */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Choose a Category</h2>
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border rounded ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-800"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Professionals List */}
      <section className="max-w-4xl mx-auto p-4">
        {professionalsData[selectedCategory].map((professional) => (
          <Card key={professional.id} professional={professional} />
        ))}
      </section>
    </div>
  );
}
