export default function Footer() {
    return (
        <footer id="site-footer" className="border-t scroll-mt-[120px]">
            <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600 ">
                <p>© {new Date().getFullYear()} Your Name. Built with Next.js.</p>
            </div>
        </footer>
    );
}