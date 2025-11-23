const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Built with passion for AI and innovation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
