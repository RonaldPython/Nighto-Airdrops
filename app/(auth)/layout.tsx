import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <ThemeProvider>
      <main className="flex min-h-screen w-full justify-between font-inter bg-background text-foreground">
        <ThemeToggle />
        {children}
        
        <div className="auth-asset">
          <div>
            <Image 
              src="/icons/auth-image.svg"
              alt="auth image"
              width={500}
              height={500}
              className="dark:invert"
            />
          </div>
        </div>
        
        <ToastContainer
          position="top-right"
          autoClose={1100}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </ThemeProvider>
  );
}