import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Магазин</h1>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icon name="ShoppingCart" size={24} />
            {cartItems > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-black text-white">
                {cartItems}
              </Badge>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Product Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center">
            <img 
              src="/img/ecf6da60-3197-4f2f-8e1c-48fda22ddb07.jpg" 
              alt="Лёня"
              className="w-full max-w-md object-cover rounded-lg shadow-sm"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-black">Лёня</h2>
            <p className="text-6xl font-light text-black">50₽</p>
            <p className="text-lg text-gray-600">Качественный товар по доступной цене</p>
            
            <Button 
              onClick={addToCart}
              className="w-fit px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              size="lg"
            >
              Добавить в корзину
            </Button>
          </div>
        </section>

        {/* Info Sections */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border border-gray-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Icon name="Truck" size={32} className="text-black" />
              <h3 className="text-2xl font-bold text-black">Доставка</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>• Бесплатная доставка от 1000₽</p>
              <p>• Доставка по Москве: 200₽</p>
              <p>• Доставка по России: от 300₽</p>
              <p>• Срок доставки: 1-3 дня</p>
            </div>
          </Card>

          <Card className="p-8 border border-gray-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Icon name="CreditCard" size={32} className="text-black" />
              <h3 className="text-2xl font-bold text-black">Оплата</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>• Банковские карты</p>
              <p>• СБП (Система быстрых платежей)</p>
              <p>• Наличными курьеру</p>
              <p>• Оплата при получении</p>
            </div>
          </Card>
        </section>

        {/* Cart Overlay */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-96 h-full p-6 shadow-lg animate-slide-in-right">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-black">Корзина</h3>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              {cartItems > 0 ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b">
                    <span className="font-medium">Лёня</span>
                    <span>{cartItems} шт.</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Итого:</span>
                    <span>{cartItems * 50}₽</span>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Оформить заказ
                  </Button>
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-8">Корзина пуста</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;