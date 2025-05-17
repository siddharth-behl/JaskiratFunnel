export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-xl">P.O.W.E.R. Framework for Fatloss</p>
            <p className="text-sm">For Punjabi Men</p>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} All Rights Reserved.</p>
            <p>This site is not a part of Facebook or Facebook Inc.</p>
            <p>FACEBOOK is a trademark of META, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
