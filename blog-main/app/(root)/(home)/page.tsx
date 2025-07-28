'use client'
import { useEffect, useRef } from 'react'
import BlogCard from '@/components/cards/blog'
import BgArrow from '@/components/shared/bg-arrow'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Button } from '@/components/ui/button'
import * as img from "@/public/blogs//04.jpg"
import Image from 'next/image'
import Link from 'next/link'

function HomePage() {
	const { blog } = useTypedSelector(state => state.blog)
	const { get_all_blogs } = useActions()
	const boxRef = useRef<any>(null)

	useEffect(() => {
		get_all_blogs(null)
	}, [get_all_blogs])

	const scrollToBuild = () => {
  if (boxRef.current) {
    boxRef.current.scrollIntoView({ behavior: "smooth", block: "center" })

  }
}

	return (
		<>
			<div className="container">
		<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-28'>
			<div className='relative min-h-[70vh] w-full bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl shadow-lg overflow-hidden'>
				<div className="pt-36 pb-20 px-6 md:px-12 text-white">
					<h1  ref={boxRef} className='font-creteRound text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
						Build on us.
					</h1>
					<p className='text-lg sm:text-xl max-w-2xl mb-3'>
						Biz barcha tajribamizni bir joyga jamladik, sizga qulaylik yaratish uchun.
					</p>
					<p className='text-lg sm:text-xl max-w-2xl mb-3'>
						Ishonchli va amaliy yondashuv bilan, yangi platformamiz yetakchi yechimlarimizga.
					</p>
					<p className='text-lg sm:text-xl max-w-2xl mb-6'>
						Ishonchli va amaliy yondashuv bilan, yangi platformamiz yetakchi yechimlarimizga.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link href={"/about"}>
						<button className='w-60  font-semibold px-8 py-3 rounded-md bg-white text-black hover:text-gray-700 hover:bg-slate-200'>
							Learn More
						</button>
						</Link>
						<Link href={"/contact"}>
						<button className='w-60 border border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition'>
							Conect
						</button>
						</Link>
					</div>
				</div>
				<BgArrow />
			</div>

		
			<h2 className='items-center flex ml-10  font-creteRound font-bold mt-24 mb-12'>
				<div>
				<span className='text-blue-500 text-4xl ' >Ishonchli xususiyatlar</span>
				<p className='mt-5'>Ishbilarmonlik ruhimizga sodiq qolgan holda, biz o‘z tajribamizni yagona manbaga birlashtirishga qaror qildik. Yangi platformamiz mashhur sho‘ba korxonalarimizni bir yerga birlashtiradi va sohadagi ilgʻor yechimlarimizdan foydalanish jarayonini soddalashtiradi - bu esa sizga barcha jabhalarda muvaffaqiyatga erishish imkonini beradi.</p>
			</div>
			</h2>

			<h2 className='items-center flex ml-10  font-creteRound font-bold mt-24 mb-12'>
				<div>
				<span className='text-blue-500 text-4xl ml-72 ' >Bo‘linmalarimiz</span>
				<p className='mt-5'>Devorlar, fasadlar, shiftlar, pollar va boshqalar uchun ilgʻor yechimlarimiz bilan tanishing. Suvoqdan tortib izolyatsiyagacha</p>
				<p className='text-center'>va boshqa mahsulotlarimizda ishonchli va unumdor qiymatni taqdim etamiz.</p>
			</div>
			</h2>

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {blog.slice(0, 3).map(post => (<BlogCard key={post.id} {...post} />))}
		  </div>
		</div>

		
			<h2 className='items-center flex ml-10  font-creteRound font-bold mt-24 mb-12'>
				<div className='ml-20'>
				<span className='text-blue-500 text-4xl ml-72' >Yuqori sifatli qurilish materiallari</span>
				<p className='mt-5'>Yetkazib berish zanjiri muammolarini va loyihaning byudjetdan chiqib ketishiga va oxir-oqibat topshirilishi</p>
				<p className='text-center'>kechiktirishiga sabab boʻladigan dizayn o‘zgarishlariga yoʻl qoʻymaslik uchun ish boshidanoq unumli va sifatli qurilish materiallarini sotib oling.</p>
			</div>
			</h2>

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {blog.slice(0, 3).map(post => (<BlogCard key={post.id} {...post} />))}
		  </div>

			<div>
		  			<h2 className='items-center flex ml-10  font-creteRound font-bold mt-24 mb-12'>
				<div className='ml-20'>
				<span className='text-blue-500 text-4xl ml-72' >KELAJAKNI BARPO ETAMIZ</span>
				<p className='mt-5'>Qurilish materiallari ishlab chiqarish boʻyicha 90 yillik tajribaga asoslangan holda, biz zamonaviy qurilish</p>
				<p className='text-center'>chaqiruvlariga innovatsion mahsulotlar, ishonchli sheriklik va global ishtirok bilan javob beramiz..</p>
			</div>
			</h2>
			<div className="container ml-14">
			<div className="flex items-center mt-14">
				<Image className='w-4/12' src={img} alt='Fota' />
				<div className='ml-10'>
					<span className='text-blue-500 text-4xl ' >Ertaga barqaror uylarni yaratish</span>
					<p className='pt-4 w-[450px]'>
						Oilaviy va global miqyosda boshqariladigan Knauf guruhi qurilishning har bir bosqichini soddalashtirib, 
						keng qamrovli yechimlarni taklif qiluvchi va sifat kafolatini ta’minlovchi ishonchli qurilish materiallari yetakchisi
						 hisoblanadi. Taniqli brendlarimiz 90 dan ortiq mamlakatlarda, 80 ta xom ashyoni qayta ishlash zavodi va 300 ta ishlab chiqarish 
						 maydonchasiga ega. Aleksandr Knauf, Jörg Kampmeyer va doktor Uve Knotzer boshchiligida biz butun dunyo bo'ylab 40 000 dan ortiq sodiq xodimlar tomonidan 
						amalga oshirilgan barqaror mahsulot portfelimizni kengaytirishda davom etamiz.
					</p>
				</div>
		</div>

			<div className="flex items-center  mt-14">
					<div className='mr-10'>
					<span className='text-blue-500 text-4xl' >Turli xil ilovalar, cheksiz tajriba</span>
					<p className='pt-4 w-[500px]'>
				Knaufda bizning innovatsiyalarimiz sizning talablaringizni tushunishdan boshlanadi. Ilg'or nou-xau va ijodkorligimiz bilan biz sanoat standartlaridan oshib ketadigan o'yinni o'zgartiruvchi yechimlarni ishlab chiqamiz. Mumkin bo'lgan chegaralarni oshirib, biz sizga loyihangizning har bir jihati uchun mos bo'lgan keng assortimentdagi materiallarni taqdim etamiz - pol va shiftlardan devorlar, tomlar va jabhalar. Bizning malakali jamoalarimiz yong'inga chidamlilik, energiya samaradorligi, barqarorlik va boshqalar bo'yicha eng yuqori darajada ishlashni ta'minlaydi - bu sizga har qanday maqsadga erishish imkonini beradi.
					</p>
				</div>
				<Image className='w-4/12' src={img} alt='Fota' />
		  </div>

				<div className="flex items-center  mt-14">
				<Image className='w-4/12' src={img} alt='Fota' />
				<div className='ml-16'>
					<h2 className='text-blue-500 text-4xl' >Murakkab texnik </h2>
					<h2 className='text-blue-500 text-4xl' >ma'lumotlarni </h2>
					<h2 className='text-blue-500 text-4xl' > soddalashtirish</h2>
					<p className='pt-4 w-[500px]'>	
						 Qurilish jarayonining istalgan bosqichida biz sizning texnik murakkabliklaringizni kamaytirmoqchimiz va sizga ishonch bilan qurish imkoniyatini beramiz. Sizni qo'llab-quvvatlash uchun biz premium yechimlarimizni tushunish, tanlash va o'rnatishni osonlashtiramiz. Resurslarimiz assortimenti mahsulot haqida ma'lumot paketlari, yong'inga qarshi xavfsizlik hujjatlari, zamonaviy sinov sertifikatlari va to'g'ri materiallarni osongina tanlash uchun raqamli vositalarni o'z ichiga oladi.
					</p>
				</div>
				</div>
				</div>
				
		</div>

		<div className="relative h-80 w-full bg-gradient-to-br mt-16 from-blue-600 to-indigo-500 rounded-2xl shadow-lg overflow-hidden flex justify-center">
			<div className="mt-20">
			<h2 className='text-center text-5xl text-white'>Karyerangizni global lider bilan yarating! </h2>
			<p className='text-center mt-7 text-white'>
				 o'sishni rag'batlantirish va jamoa muvaffaqiyatini yaratishga Kasbiy sayohatingizda qayerda bo'lishingizdan qat'i nazar, biz individual
			</p>
			<p className='text-center text-white'>
				va biz birgalikda dunyoni yanada oqilona, tezroq va barqarorroq qurishga yordam bera olamiz.
			</p>
				<button onClick={scrollToBuild} className='w-60  font-semibold px-8 py-3 rounded-md ml-96 mt-9 bg-white text-black hover:text-gray-700 hover:bg-slate-200'>
							Learn More
				</button>
			</div>
		</div>

			<h2 className='items-center flex ml-48  font-creteRound font-bold mt-24 mb-12'>
				<div>
				<span className='text-blue-500 text-4xl ml-72 ' >Knauf guruhi</span>
				<p className='mt-5'>Bir necha o'n yilliklarga borib taqaladigan boy tarix va ilg'or qurilish materiallarini taklif qilish bo'yicha</p>
				<p className='text-center'>tasdiqlangan tajribamiz bilan biz qurilish va qurilish yechimlari sohasida ishonchli nomga aylandik.</p>
			</div>
			</h2>

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {blog.slice(0, 3).map(post => (<BlogCard key={post.id} {...post} />))}
		  </div>
		  </div>
		</>
	)
}

export default HomePage
