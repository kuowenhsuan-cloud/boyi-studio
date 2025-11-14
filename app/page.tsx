'use client';
import React, { useEffect, useState } from 'react';

export default function StudioHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header role="banner" className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide text-lg">柏宜山房 · Brad Studio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">服務</a>
            <a href="#process" className="hover:opacity-80">流程</a>
            <a href="#team" className="hover:opacity-80">團隊</a>
            <a href="#studio-images" className="hover:opacity-80">工作現場</a>
            <a href="#pricing" className="hover:opacity-80">估價</a>
            <a href="#faq" className="hover:opacity-80">常見問題</a>
            <a href="#contact" className="hover:opacity-80">聯絡</a>
            <a href="https://www.instagram.com/2014_brad/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">IG</a>
            <a href="https://www.facebook.com/2014Brad/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">FB</a>
            <a href="https://maps.app.goo.gl/B5e9D92PVZT6QJFj8" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">地圖</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="border-b bg-center bg-cover text-white" style={{ backgroundImage: "url('/optimized/hero-small.jpg')" }}>
        <div className="bg-black/50">
          <div className="mx-auto max-w-6xl px-4 py-28 md:py-36 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">中國書畫裝裱與修復｜柏宜山房</h1>
              <p className="mt-4 text-gray-100">位於台北松山區，前身「墨廊」（2001），2015 年更名以紀念 Bradley James Gardner（甘柏宜）。以可逆性、保存倫理與工藝準確度為核心。</p>
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a href="#contact" className="rounded-2xl px-5 py-3 border shadow hover:shadow-md bg-white/10">線上估價</a>
                <a href="#team" className="rounded-2xl px-5 py-3 border bg-white/10">團隊</a>
                <span className="hidden md:inline-block w-px h-6 bg-white/30" />
                <a href="https://www.instagram.com/2014_brad/" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 border border-white/30 text-sm hover:bg-white/10">Instagram</a>
                <a href="https://www.facebook.com/2014Brad/" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 border border-white/30 text-sm hover:bg-white/10">Facebook</a>
                <a href="https://maps.app.goo.gl/B5e9D92PVZT6QJFj8" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 border border-white/30 text-sm hover:bg-white/10">Google 地圖</a>
              </div>
            </div>
            <div className="hidden md:block text-gray-200 text-sm leading-relaxed text-right">
              <p>柏：細膩的植物，性耐寒，葉小、鱗形，紋理細密，是上好材質。</p>
              <p>宜：相安、和順、適當、共享。</p>
              <p className="mt-4">謹紀念 摯友 Bradley James Gardner 甘柏宜 (1982–2014)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">裝裱服務</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="rounded-2xl border p-6"><div className="font-medium">立軸／冊頁／手卷／屏風</div><p className="mt-2">可逆性膠料與分層結構；收藏級紙材與背襯。</p></div>
            <div className="rounded-2xl border p-6"><div className="font-medium">框裱與展示結構</div><p className="mt-2">畫框、背板、防酸材料與 UV 保護方案。</p></div>
            <div className="rounded-2xl border p-6"><div className="font-medium">修復與保存建議</div><p className="mt-2">破損補紙、清污脫酸、黏著剝離與保存環境規劃。</p></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">流程與保存原則</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-700 list-decimal list-inside">
            <li>初評估：尺寸、材質、狀況；提供初步建議與預估。</li>
            <li>方案確認：材質與結構擇定，預計工期與報價。</li>
            <li>工藝執行：可逆性、可追溯；完工後提供保存建議。</li>
          </ol>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">團隊成員 Team</h2>
          <p className="text-gray-600 text-sm">柏宜山房由多位專業成員組成，融合傳統裝裱工藝、木作結構與保存修復技術。</p>
          <div className="mt-10 grid md:grid-cols-4 gap-8 text-left">
            {[
              { name: '甘柏宜 Bradley James Gardner（1982–2014）', title: '永遠的夥伴 · In Memoriam', img: '/optimized/bradley-small.jpg', desc: '以誠實與專注實踐東方裝裱工藝，對柏宜山房之成立與倫理奠基具有關鍵意義。' },
              { name: '郭汶瑄 Wen-Hsuan Kuo', title: '裝裱與修復總監', img: '/optimized/kuo-small.jpg', desc: '專長於書畫修復與可逆性裝裱技術，結合傳統與保存倫理，現為柏宜山房創辦人。', link: 'https://www.instagram.com/kuowenhsuan/' },
              { name: '呂兪樺 Ly Yu-Hua', title: '陶作與紙本結構設計師', img: '/optimized/ly_yuhua-small.jpg', desc: '以陶藝與紙本材料實驗為核心，協助開發裝裱與保存相關結構性部件，結合工藝與研究。' },
              { name: '黃士桓 Huang Shih-Huan', title: '木工師、3D 繪圖設計師', img: '/optimized/huang_shihhuan-small.jpg', desc: '專注於畫框結構與榫卯製作，結合傳統工法與現代設計，並以 3D 建模輔助製作流程。', link: 'https://www.instagram.com/shih.artstudio/' },
            ].map((m, i) => (
              <figure key={i} className="rounded-2xl border p-5 hover:shadow-sm">
                <img src={m.img} alt={m.name} className="rounded-xl mb-4 object-cover w-full aspect-square" />
                <figcaption>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{m.title}</div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{m.desc}</p>
                  {m.link && (
                    <a href={m.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm underline">Instagram →</a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Images */}
      <section id="studio-images" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">工作現場剪影 Studio Images</h2>
          {(() => {
            const workshopImages = [
              '/optimized/workshop1-small.jpg',
              '/optimized/workshop2-small.jpg',
              '/optimized/workshop3-small.jpg',
              '/optimized/workshop4-small.jpg',
              '/optimized/workshop5-small.jpg',
              '/optimized/workshop6-small.jpg',
              '/optimized/workshop7-small.jpg',
              '/optimized/workshop8-small.jpg',
              '/optimized/workshop9-small.jpg',
            ];
            function Carousel() {
              const [idx, setIdx] = useState(0);
              useEffect(() => {
                const t = setInterval(() => setIdx((i) => (i + 1) % workshopImages.length), 5600); // 5.6 秒
                return () => clearInterval(t);
              }, []);
              return (
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border">
                  {workshopImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Studio view ${i + 1}`}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {workshopImages.map((_, i) => (
                      <span key={i} className={`h-1.5 w-6 rounded-full ${i === idx ? 'bg-black/70' : 'bg-white/60'}`}></span>
                    ))}
                  </div>
                </div>
              );
            }
            return <Carousel />;
          })()}
        </div>
      </section>

      {/* About ZH */}
      <section id="about" className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">關於柏宜山房</h2>
          <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">『柏宜山房』座落在台北市松山區，前身為「墨廊」創立於2001年，草創時期命名之所以採「墨」字，除了表達筆墨創作之意，同時也期盼彰顯空間成立的初衷：服譍墨家兼愛的思想。後於2015年改名為柏宜山房，取柏宜山房一名，同時也為紀念曾一同學習的夥伴及摯友 Bradley James Gardner 甘柏宜 (1982–2014)。

在山房裡的每一位夥伴，都俱有著相同的信念，從自身熱愛藝術的內心作為出發，透過裝裱形式的助益，推播優質藏品的流通，最終期待回歸創作本質。我們相信，不論是對創作者、收藏家、裝裱工作夥伴及藝文相關產業，是能夠形成一個共生共利的良性循環生態，也透過彼此的合作達到相輔相成的關係，漸而提升藝術產業中良好的交流與經驗分享。</p>
        </div>
      </section>

      {/* About EN */}
      <section id="about-en" className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">About Brad Studio</h2>
          <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">Brad Studio is located in Songshan District, Taipei. Its predecessor, "Ink Gallery," was founded in 2001. The name "Ink" was chosen not only to express the spirit of brush and ink creation, but also to embody the founding philosophy inspired by the Mohist ideal of universal love. In 2015, it was renamed "Brad Studio" (Boyi Shan Fang) in memory of our dear friend and collaborator, Bradley James Gardner (1982–2014).

Within the studio, each member shares the same belief: beginning from a genuine passion for art, we seek to assist and preserve through the craft of mounting—promoting the circulation of fine works while ultimately returning to the essence of creation. We believe that, through collaboration among artists, collectors, craftsmen, and the cultural industry, an ecosystem of mutual benefit and shared growth can emerge, fostering meaningful exchange and collective advancement in the field of art.</p>
        </div>
      </section>

      {/* LA Studio (Coming Soon) */}
      <section id="la-studio" className="border-b bg-gray-50 text-center">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Brad Studio LA｜加州工作室計劃</h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">柏宜山房計劃於 2026–2027 年於美國加州成立新據點，延伸中國書畫裝裱與修復工藝，並作為東方紙本藝術保存與研究的國際節點。<br />詳細內容將於後續公布。<br /><span className="text-xs text-gray-400">Coming Soon · Los Angeles, California</span></p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">估價區間（參考）</h2>
          <ul className="mt-6 text-sm text-gray-700 leading-7 list-disc list-inside">
            <li>立軸 NT$10,000 起（完成尺寸每才 900 起）</li>
            <li>框裱 NT$6,000 起</li>
            <li>修復 NT$1,500–5,000 / 時（基本收費 8,000 起；依尺寸／年代／複雜度調整）</li>
          </ul>
        </div>
      </section>

    
      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">線上估價 / 預約</h2>
          <p className="mt-3 text-gray-600 text-sm">留下尺寸、材質與照片連結（Google Drive/Dropbox/Instagram），我們將回覆初估與建議。</p>
          <form className="mt-8 grid md:grid-cols-2 gap-6">
            <input className="border rounded-xl px-4 py-3" placeholder="姓名 / 機構" />
            <input className="border rounded-xl px-4 py-3" placeholder="Email" />
            <input className="border rounded-xl px-4 py-3 md:col-span-2" placeholder="作品尺寸（長×寬×厚）與材質" />
            <input className="border rounded-xl px-4 py-3 md:col-span-2" placeholder="照片連結（可多個）" />
            <textarea className="border rounded-xl px-4 py-3 md:col-span-2" rows={5} placeholder="需求說明（形式、預算、時程、展示/保存需求）" />
            <div className="md:col-span-2">
              <button type="button" className="rounded-2xl px-5 py-3 border shadow hover:shadow-md">送出需求</button>
            </div>
          </form>
          <div className="mt-10 text-sm text-gray-600 space-y-1">
            <div>工作室位置：台北市（預約制）｜<a className="underline" href="https://maps.app.goo.gl/B5e9D92PVZT6QJFj8" target="_blank" rel="noopener noreferrer">Google 地圖</a></div>
            <div>聯絡信箱：<a className="underline" href="mailto:kuowenhsuan@gmail.com">kuowenhsuan@gmail.com</a></div>
            <div>Instagram：<a className="underline" href="https://www.instagram.com/2014_brad/" target="_blank" rel="noopener noreferrer">@2014_brad</a> ｜ Facebook：<a className="underline" href="https://www.facebook.com/2014Brad/" target="_blank" rel="noopener noreferrer">2014Brad</a></div>
            <div className="text-xs text-gray-500 mt-4">※ 本工作室支援傳統付款與比特幣（BTC）收付，詳情可於洽談時確認。<br />BTC payment supported upon request.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500 grid md:grid-cols-2 gap-3">
          <div>© {new Date().getFullYear()} 柏宜山房 Brad Studio. All rights reserved.</div>
          <div className="md:text-right">個人網站：<a className="underline" href="https://www.instagram.com/kuowenhsuan/" target="_blank" rel="noopener noreferrer">Wen-Hsuan Kuo →</a></div>
          <div className="md:col-span-2 mt-3">
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.instagram.com/2014_brad/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="https://www.facebook.com/2014Brad/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://maps.app.goo.gl/B5e9D92PVZT6QJFj8" target="_blank" rel="noopener noreferrer" className="hover:underline">Google 地圖</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
