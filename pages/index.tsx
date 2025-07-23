import Link from "next/link"

function Card({ children }) {
  return <div className="border rounded-2xl shadow p-4 bg-white">{children}</div>
}

function CardContent({ children }) {
  return <div>{children}</div>
}

export default function PrinceSunHome() {
  return (
    <div className="min-h-screen p-4 bg-white text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Prince Sun</h1>
        <p className="text-lg mt-2">Stylish Home Essentials for Every Space</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p>
              Based in Wyoming, Prince Sun is dedicated to offering high-quality home products designed for comfort, style, and sustainability. Our mission is to bring beauty and utility into every corner of your living space.
            </p>
            <Link href="/about" className="text-blue-500 underline mt-2 block">Learn More</Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Our Products</h2>
            <ul className="list-disc list-inside">
              <li>Minimalist Wall Shelves</li>
              <li>Eco-friendly Kitchen Linens</li>
              <li>Handcrafted Ceramic Vases</li>
            </ul>
            <Link href="/products" className="text-blue-500 underline mt-2 block">Browse Products</Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>Have a question? Reach out anytime.</p>
            <p className="mt-2">Email: info@princesun.shop</p>
            <Link href="/contact" className="text-blue-500 underline mt-2 block">Get in Touch</Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
            <p>
              We respect your privacy. Any information collected through this website will be used solely for the purpose of providing services to you and will not be shared with third parties except as required by law.
            </p>
            <Link href="/privacy" className="text-blue-500 underline mt-2 block">Read Our Policy</Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Return Policy</h2>
            <p>
              Items can be returned within 30 days of receipt for a full refund, provided they are unused and in original packaging. Please contact our support team before initiating a return.
            </p>
            <Link href="/returns" className="text-blue-500 underline mt-2 block">Read Return Policy</Link>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center text-sm mt-10 text-gray-500">
        <p>© 2025 Prince Sun LLC – Registered in Wyoming</p>
        <div className="mt-2">
          <Link href="/privacy" className="mr-4 underline">Privacy Policy</Link>
          <Link href="/returns" className="underline">Return Policy</Link>
        </div>
      </footer>
    </div>
  )
}
