export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold mb-4 text-[var(--primary)]">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your order! We'll send you a confirmation email shortly with pickup details.
        </p>
        <a 
          href="/treats" 
          className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent)] transition"
        >
          Continue Shopping
        </a>
      </div>
    </main>
  );
}
