import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
  return (
<div className="static   w-full bottom-1 bg-blue-900 text-white px-10 py-16 mt-10 text-base">
  <div className="flex flex-col md:flex-row items-start justify-center gap-20">
    
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold mb-4">Logo</h1>
      <a className="hover:underline">Biz kimmiz</a>
      <a className="hover:underline">Nima qilamiz</a>
      <a className="hover:underline">Bizning Tarix</a>
      <a className="hover:underline">Manzillar kitobi</a>
      <a className="hover:underline">Yetkazib beruvchilar</a>
    </div>

    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold mb-4">
        Bizning tashkilotlarimiz Resurslar
      </h1>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col gap-3">
          <a href="#" className="hover:underline">Knauf Gypsum</a>
          <a href="#" className="hover:underline">Knauf Insulation</a>
          <a href="#" className="hover:underline">Knauf Ceiling Solutions</a>
        </div>

        <div className="flex flex-col gap-3">
          <a href="#" className="hover:underline">Barcha mahsulotlar</a>
          <a href="#" className="hover:underline">Yuklab olish markazi</a>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3 min-w-[200px]">
      <h1 className="text-2xl font-bold mb-4">Knauf bilan bog'laning</h1>
      <a className="hover:underline">Biz bilan bog'lanish</a>
      <a className="hover:underline">Global martaba</a>
      <a className="hover:underline">Ijtimoiy kanallar</a>
    </div>

  </div>
</div>

  )
}

export default Footer