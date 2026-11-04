'use client'

import React, { useState } from 'react'
import { Search, BookOpen, Headphones, Gamepad2, User, Sparkles, TrendingUp, Compass, Bookmark, ChevronRight } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const categories = [
    { name: 'Đề xuất', active: true },
    { name: 'Tiểu thuyết', active: false },
    { name: 'Nghe sách', active: false },
    { name: 'Phim ngắn', active: false },
    { name: 'Truyện mới', active: false },
    { name: 'Danh mục', active: false },
  ]

  const featuredBooks = [
    { id: 1, title: 'Hành Trình Phương Đông', author: 'Baird T. Spalding', category: 'Triết lý', reads: '12.5k', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80' },
    { id: 2, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', category: 'Kỹ năng', reads: '45.2k', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80' },
    { id: 3, title: 'Nhà Giả Kim', author: 'Paulo Coelho', category: 'Văn học', reads: '89.1k', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80' },
  ]

  return (
    <div className="max-w-md mx-auto bg-[#F5F1E7] min-h-screen relative shadow-2xl border-x border-[#EAE4D2]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F5F1E7]/90 backdrop-blur-md px-4 pt-4 pb-2 border-b border-[#D7CBB5]/40">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#26231E] font-serif">THƯ CÁC</h1>
            <p className="text-xs text-[#B68A55] font-medium tracking-wide">KHÔNG GIAN VĂN HÓA & GIẢI TRÍ</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-[#EAE4D2] text-[#26231E] hover:bg-[#D7CBB5] transition">
              <Sparkles size={18} />
            </button>
          </div>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm tên truyện, tác giả, thể loại..."
            className="w-full bg-[#EAE4D2]/70 text-[#26231E] placeholder-[#26231E]/50 pl-10 pr-4 py-2.5 rounded-xl text-sm border border-[#D7CBB5]/60 focus:outline-none focus:border-[#B68A55] transition"
          />
          <Search className="absolute left-3.5 top-3 text-[#26231E]/50" size={16} />
        </div>

        {/* Categories Tab */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pt-3 pb-1 text-sm">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`whitespace-nowrap font-medium pb-1.5 border-b-2 transition ${
                cat.active
                  ? 'border-[#B68A55] text-[#B68A55]'
                  : 'border-transparent text-[#26231E]/60 hover:text-[#26231E]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 space-y-6">
        {/* Banner Đề xuất */}
        <section className="bg-gradient-to-r from-[#B68A55] to-[#8C6433] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-2 max-w-[70%]">
            <span className="bg-white/20 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm font-medium">PWA Mobile Edition</span>
            <h2 className="text-xl font-bold font-serif leading-tight">Chào mừng đến Thư Các</h2>
            <p className="text-xs text-white/80 line-clamp-2">Đọc sách, dịch thuật, nghe audio tĩnh tâm và trải nghiệm giải trí trí tuệ trực tiếp trên iPhone.</p>
          </div>
          <BookOpen className="absolute -right-3 -bottom-3 text-white/10" size={140} />
        </section>

        {/* Danh mục đặc sắc */}
        <section className="space-y-3">
          <h3 className="font-bold text-[#26231E] flex items-center gap-2 text-base">
            <Compass size={18} className="text-[#B68A55]" />
            Danh mục đặc sắc
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#EAE4D2]/60 p-3.5 rounded-xl border border-[#D7CBB5]/40 flex flex-col items-center text-center space-y-1.5 hover:border-[#B68A55] transition cursor-pointer">
              <div className="p-2.5 bg-[#B68A55]/10 text-[#B68A55] rounded-lg">
                <BookOpen size={20} />
              </div>
              <span className="text-xs font-semibold text-[#26231E]">Đọc & Dịch Truyện</span>
              <span className="text-[10px] text-[#26231E]/60">Kho tàng tuyển chọn & công cụ dịch</span>
            </div>
            <div className="bg-[#EAE4D2]/60 p-3.5 rounded-xl border border-[#D7CBB5]/40 flex flex-col items-center text-center space-y-1.5 hover:border-[#B68A55] transition cursor-pointer">
              <div className="p-2.5 bg-[#B68A55]/10 text-[#B68A55] rounded-lg">
                <Headphones size={20} />
              </div>
              <span className="text-xs font-semibold text-[#26231E]">Audio Thư Giãn</span>
              <span className="text-[10px] text-[#26231E]/60">Sách nói, podcast & âm thanh tĩnh tâm</span>
            </div>
            <div className="bg-[#EAE4D2]/60 p-3.5 rounded-xl border border-[#D7CBB5]/40 flex flex-col items-center text-center space-y-1.5 hover:border-[#B68A55] transition cursor-pointer">
              <div className="p-2.5 bg-[#B68A55]/10 text-[#B68A55] rounded-lg">
                <Gamepad2 size={20} />
              </div>
              <span className="text-xs font-semibold text-[#26231E]">Giải Trí & Trò Chơi Trí Tuệ</span>
              <span className="text-[10px] text-[#26231E]/60">Thử thách tư duy, rèn luyện não bộ mỗi ngày</span>
            </div>
          </div>
        </section>

        {/* Đang thịnh hành */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#26231E] flex items-center gap-2 text-base">
              <TrendingUp size={18} className="text-[#B68A55]" />
              Đang thịnh hành
            </h3>
            <span className="text-xs text-[#B68A55] font-medium flex items-center cursor-pointer">Xem tất cả <ChevronRight size={14} /></span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {featuredBooks.map((book) => (
              <div key={book.id} className="space-y-2 group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative bg-[#EAE4D2] border border-[#D7CBB5]/50">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <span className="absolute top-1.5 left-1.5 bg-[#26231E]/80 text-white text-[9px] px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {book.category}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#26231E] line-clamp-1 group-hover:text-[#B68A55] transition">{book.title}</h4>
                  <p className="text-[10px] text-[#26231E]/60 line-clamp-1">{book.author}</p>
                  <p className="text-[10px] text-[#B68A55] font-medium">🎧 {book.reads}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation (PWA 5 mục chuẩn Master Prompt) */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#F5F1E7]/95 backdrop-blur-md border-t border-[#D7CBB5]/60 px-4 py-2 z-40">
        <div className="flex justify-between items-center text-center">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 flex-1 ${activeTab === 'home' ? 'text-[#B68A55]' : 'text-[#26231E]/60'}`}>
            <BookOpen size={20} />
            <span className="text-[10px] font-semibold">Khám phá</span>
          </button>
          <button onClick={() => setActiveTab('books')} className={`flex flex-col items-center gap-1 flex-1 ${activeTab === 'books' ? 'text-[#B68A55]' : 'text-[#26231E]/60'}`}>
            <Bookmark size={20} />
            <span className="text-[10px] font-semibold">Đọc sách</span>
          </button>
          <button onClick={() => setActiveTab('audio')} className={`flex flex-col items-center gap-1 flex-1 ${activeTab === 'audio' ? 'text-[#B68A55]' : 'text-[#26231E]/60'}`}>
            <Headphones size={20} />
            <span className="text-[10px] font-semibold">Audio</span>
          </button>
          <button onClick={() => setActiveTab('game')} className={`flex flex-col items-center gap-1 flex-1 ${activeTab === 'game' ? 'text-[#B68A55]' : 'text-[#26231E]/60'}`}>
            <Gamepad2 size={20} />
            <span className="text-[10px] font-semibold">Trò chơi</span>
          </button>
          <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 flex-1 ${activeTab === 'profile' ? 'text-[#B68A55]' : 'text-[#26231E]/60'}`}>
            <User size={20} />
            <span className="text-[10px] font-semibold">Cá nhân</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
