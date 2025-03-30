import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-900 p-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Categories Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              {['Clothing & Fashion', 'Toys', 'Books & CDs', 'School Supplies', 'Birthday Party Supplies', 
                'Baby Diapering', 'Feeding & Nursing', 'Bath & Skin Care', 'Health & Safety', 
                'Baby Gear', 'Nursery', 'Moms & Maternity', 'Gifts'].map(item => (
                <li key={item} className="hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          {/* FirstCry Parenting Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">FIRSTCRY PARENTING</h3>
            <ul className="space-y-2">
              {['Getting Pregnant', 'Pregnancy', 'Baby', 'Toddler', 'Preschooler', 
                'Big Kid', 'Vaccination', 'Growth Tracker', 'Baby Names', 
                'FirstCry Parenting YouTube', 'Coloring Pages'].map(item => (
                <li key={item} className="hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          {/* Shipping & Policies Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">SHIPPING & POLICIES</h3>
            <ul className="space-y-2">
              {['Payments', 'Shipping Policy', 'Return & Replacement Policy', 
                'Cancellation Policy', 'Terms of Use', 'Privacy Policy', 
                'Next Day & Same Day Delivery', 'Responsible Disclosure'].map(item => (
                <li key={item} className="hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          {/* Our Apps Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">OUR APPS</h3>
            <ul className="space-y-2">
              {['FirstCry India: Shopping & Parenting', 'FirstCry India: Shopping & Parenting iOS', 
                'Learning & Education', 'Intellikits', 'Intellitots'].map(item => (
                <li key={item} className="hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          {/* Shop International Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">SHOP INTERNATIONAL</h3>
            <ul className="space-y-2">
              {['FirstCry UAE', 'FirstCry KSA', 'FirstCry KSA (English)', 
                'FirstCry Arabia: Shopping & Parenting'].map(item => (
                <li key={item} className="hover:underline">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-between mt-8 text-sm space-y-2 sm:space-y-0">
          {['Shortlist', 'Quick Re-Order', 'Track Order', 
            'Become a Franchisee', 'Preschool Admissions'].map(item => (
            <a key={item} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
