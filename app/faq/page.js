import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Faq from '@/components/shared/Faq';

export default function FaqPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <Faq />
      </div>
      <Footer />
    </main>
  );
}

export const metadata = {
  title: 'FAQ - Seasides Conference 2026',
  description: 'Frequently asked questions about Seasides Conference 2026 - Your cybersecurity event in Goa.'
};
