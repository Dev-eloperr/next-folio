export default function Footer() {
    return (
        <footer id="site-footer" className="border-t scroll-mt-[120px]">
            <div className="default-container py-10 text-sm text-gray-600 ">
                <p>© {new Date().getFullYear()} Your Name. Built with Next.js.</p>
            </div>
        </footer>
    );
}