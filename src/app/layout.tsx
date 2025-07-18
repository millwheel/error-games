import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import DustCanvas from "@/components/DustCanvas";


export const metadata: Metadata = {
    title: "Error Games",
    description: "에러 게임즈 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko">
        <body className="bg-black text-white">
          <Navbar />
          <DustCanvas />
              {children}
          <footer className="m-20 space-y-10">
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                  <p className="font-bold text-lg mb-2">
                      주식회사 반지하게임즈
                  </p>
                  <p className="text-sm">
                      대표: 이유원 정윤지
                  </p>
                  <p className="text-sm">
                      사업자 등록번호: 667-87-01841
                  </p>
                  <p className="text-sm">
                      04057 서울특별시 마포구 신촌로14길 20(노고산동) 6층 반지하게임즈
                  </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-1 text-yellow-300">
                  <p className="font-bold text-sm">
                      서비스 이용 약관
                  </p>
                  <p className="font-bold text-sm">
                      개인정보처리방침
                  </p>
                  <p className="font-bold text-sm">
                      개발자 연락처: +82 2747 5048
                  </p>
                  <p className="font-bold text-sm">
                      문의:
                      <a href="mailto:banjihagames.help@gmail.com" className="hover:underline ml-1">
                          banjihagames.help@gmail.com
                      </a>
                  </p>
              </div>
          </footer>
        </body>
      </html>
  );
}
