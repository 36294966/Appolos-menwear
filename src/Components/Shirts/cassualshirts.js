import React, { useState } from 'react';
import Cassual1 from '../../Assets/Cassual/cassual1.jpg';
import Cassual2 from '../../Assets/Cassual/cassual2.jpg';
import Cassual3 from '../../Assets/Cassual/cassual3.jpg';
import { CheckCircle, XCircle } from 'lucide-react';

const PaymentPopup = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const handlePaymentConfirmation = () => {
    const content = `PURCHASE\n--------\nItem ID: ${item?.id}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: ${amount || '________'}\nStandard Price: ${item?.price}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `payment_${item?.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Confirmed!
            </>
          ) : (
            'Complete Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">{item?.price}</span>
                </div>
              </div>
              
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1700"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePaymentConfirmation}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Transaction receipt downloaded successfully</p>
            <p className="text-sm text-gray-500 mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Cassual = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);

  const casualShirts = [
    {
      id: 1,
      name: 'Premium Casual Shirt',
      image: Cassual1,
      price: 'Ksh 1,700'
    },
    {
      id: 2,
      name: 'Designer Casual Shirt',
      image: Cassual2,
      price: 'Ksh 1,700'
    },
    {
      id: 3,
      name: 'Executive Casual Shirt',
      image: Cassual3,
      price: 'Ksh 1,700'
    }
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Casual Collection
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {casualShirts.map((shirt) => (
          <div
            key={shirt.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200 p-4">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{shirt.name}</h3>
              <p className="text-lg text-blue-700 font-bold">{shirt.price}</p>
              <button
                onClick={() => {
                  setSelectedShirt(shirt);
                  setShowPayment(true);
                }}
                className="mt-2 w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup 
          item={selectedShirt}
          onClose={() => {
            setShowPayment(false);
            setSelectedShirt(null);
          }}
        />
      )}
    </section>
  );
};

export default Cassual;