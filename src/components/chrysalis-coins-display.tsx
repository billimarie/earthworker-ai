import { Sprout, Worm } from 'lucide-react';
import ChrysalisCoin from './chrysalis-coin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const MyceliumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-4 7-4 6 4 8 4" />
    <path d="M20 12s-2 4-6 4-7-4-9-4" />
    <path d="M12 2v3" />
    <path d="M10 7v2" />
    <path d="M14 7v2" />
    <path d="M5 15v2" />
    <path d="M19 15v2" />
  </svg>
);

const LevelIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L6.5 12h11L12 2zm5.5 11l-5.5 9-5.5-9h11z"/>
    </svg>
);

export default function ChrysalisCoinsDisplay() {
  return (
    <Card className="bg-transparent border-none shadow-none rounded-none">
      <CardContent className="flex flex-col items-center gap-4">
        <ChrysalisCoin
          name="Mycelia"
          description="The Unseen Network"
          imageUrl="https://res.cloudinary.com/djrhjkkvm/image/upload/v1751496176/AI/ai-mechanical-earthworm_the-ai-forest_vfcsdm.webp"
          data-ai-hint="fungus network"
          mainIcon={MyceliumIcon}
        />
        {/* <ChrysalisCoin
          name="Mycelia"
          description="The Unseen Network"
          imageUrl="https://res.cloudinary.com/djrhjkkvm/image/upload/v1751496176/AI/ai-mechanical-earthworm_the-ai-forest_vfcsdm.webp"
          data-ai-hint="fungus network"
          mainIcon={MyceliumIcon}
        /> */}
        {/* Add more coins here as they are unlocked */}
      </CardContent>
    </Card>
  );
}
