'use client';

import React, { useState } from 'react';

export default function ThuCacHome() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 pb-24 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white font-bold text-lg">
            📚
          </div>
          <div>
            <h1 className="text-base font-bold tracking-wider bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">THƯ CÁC</h1>
            <p className="text-[10px] text-slate-400">Không gian văn hóa & giải trí</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">
            🔍
          </button>
          <button className="p-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">
            🔔
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-4 max-w-md mx-auto space-y-6">
        {/* Banner Chào Mừng */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 p-5 shadow-xl">
          <div className="relative z-10 space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-black/35 text-[10px] font-semibold uppercase tracking-widest text-orange-200 border border-white/10">PWA Mobile Edition</span>
            <h2 className="text-xl font-extrabold text-white">Chào mừng đến Thư Các</h2>
            <p className="text-xs text-orange-100 leading-relaxed">Đọc sách, dịch thuật, nghe audio tĩnh tâm và trải nghiệm giải trí trí tuệ trực tiếp trên iPhone.</p>
          </div>
        </div>

        {/* Danh mục đặc sắc */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Danh mục đặc sắc</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-orange-500/50 transition cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl mb-3">📖</div>
              <h4 className="font-bold text-sm text-slate-200">Đọc & Dịch Truyện</h4>
              <p className="text-[11px] text-slate-400 mt-1">Kho tàng sách tuyển chọn & công cụ dịch.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-amber-500/50 transition cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-3">🎧</div>
              <h4 className="font-bold text-sm text-slate-200">Audio Thư Giãn</h4>
              <p className="text-[11px] text-slate-400 mt-1">Sách nói, podcast & âm thanh tĩnh tâm.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/50 transition cursor-pointer col-span-2 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">🎮</div>
              <div>
                <h4 className="font-bold text-sm text-slate-200">Giải Trí & Trò Chơi Trí Tuệ</h4>
                <p className="text-[11px] text-slate-400">Thử thách tư duy, rèn luyện não bộ mỗi ngày.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Đang thịnh hành */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Đang thịnh hành</h3>
            <span className="text-xs text-orange-400 font-medium cursor-pointer">Xem tất cả</span>
          </div>
          <div className="space-y-2.5">
            {[
              { title: "Hành trình phương Đông", author: "Baird T. Spalding", category: "Triết lý", reads: "12.5k" },
              { title: "Đắc Nhân Tâm", author: "Dale Carnegie", category: "Kỹ năng", reads: "45.2k" },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-16 rounded-lg bg-slate-700/80 flex items-center justify-center text-lg shadow-inner">📚</div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">{item.title}</h5>
                    <p className="text-[11px] text-slate-400">{item.author}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[9px] bg-orange-500/10 text-orange-300 border border-orange-500/20">{item.category}</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">👀 {item.reads}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-lg border-t border-slate-800 px-6 py-2.5 flex items-center justify-between z-50 max-w-md mx-auto">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-orange-400' : 'text-slate-400'}`}>
          <span className="text-lg">🏠</span>
          <span className="text-[10px] font-medium">Khám phá</span>
        </button>
        <button onClick={() => setActiveTab('read')} className={`flex flex-col items-center space-y-1 ${activeTab === 'read' ? 'text-orange-400' : 'text-slate-400'}`}>
          <span className="text-lg">📖</span>
          <span className="text-[10px] font-medium">Đọc sách</span>
        </button>
        <button onClick={() => setActiveTab('audio')} className={`flex flex-col items-center space-y-1 ${activeTab === 'audio' ? 'text-orange-400' : 'text-slate-400'}`}>
          <span className="text-lg">🎧</span>
          <span className="text-[10px] font-medium">Audio</span>
        </button>
        <button onClick={() => setActiveTab('games')} className={`flex flex-col items-center space-y-1 ${activeTab === 'games' ? 'text-orange-400' : 'text-slate-400'}`}>
          <span className="text-lg">🎮</span>
          <span className="text-[10px] font-medium">Trò chơi</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center space-y-1 ${activeTab === 'profile' ? 'text-orange-400' : 'text-slate-400'}`}>
          <span className="text-lg">👤</span>
          <span className="text-[10px] font-medium">Cá nhân</span>
        </button>
      </nav>
    </main>
  );
}
