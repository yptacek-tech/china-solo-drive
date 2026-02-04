import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CheckoutButtonProps {
  priceId: string;
  children: React.ReactNode;
  className?: string;
}

const CheckoutButton = ({ priceId, children, className }: CheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId },
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Nastala chyba při přesměrování na platbu. Zkuste to prosím znovu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      variant="action"
      size="xl"
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Načítání...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default CheckoutButton;
