// components/pages/Home.jsx
import { Link } from '@tanstack/react-router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';

export function Home() {
  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];

  return (
    <div className="p-4">
      <Menubar model={navItems.map(item => ({
        template: <Link to={item.url} className="p-menuitem-link">{item.label}</Link>
      }))} />

      <Card title="Welcome to PrimeReact" className="mt-4">
        <p className="m-0">
          This is a sample card component from PrimeReact. 
          Explore their awesome components!
        </p>
        <div className="mt-4 flex gap-2">
          <Button label="Click Me" icon="pi pi-check" />
          <Button label="Learn More" className="p-button-outlined" />
        </div>
      </Card>

      <div className="mt-4 grid">
        <div className="col-4">
          <Card title="Feature 1" className="shadow-3">
            <i className="pi pi-cog text-4xl"></i>
            <p>Customizable components</p>
          </Card>
        </div>
        <div className="col-4">
          <Card title="Feature 2" className="shadow-3">
            <i className="pi pi-mobile text-4xl"></i>
            <p>Mobile-first design</p>
          </Card>
        </div>
        <div className="col-4">
          <Card title="Feature 3" className="shadow-3">
            <i className="pi pi-shield text-4xl"></i>
            <p>Secure and reliable</p>
          </Card>
        </div>
      </div>
    </div>
  );
}