const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-[hsl(var(--border))]/30 bg-[hsl(var(--background))]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[hsl(var(--text-tertiary))]">
                        © {currentYear} AWASH D3V. ALL RIGHTS RESERVED.
                    </p>
                    <div className="h-px w-8 bg-[hsl(var(--primary))]/30" />
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[hsl(var(--text-primary))]">
                        FULLY DEVELOPED BY AWASH D3V
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
