import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Charger la clé publique Stripe
//const stripePromise = loadStripe('pk_test_51Q3iMXAk5SfpEgFj9oJwnBkUu7e9v0ntbxYrDlcaTrVACRkCZSCAbsLxcFQt63hOeggG5tPQsJ6jgHTtsaV405Ul00HVkyAPhz');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardNumberElement = elements.getElement(CardNumberElement);

    try {
      const { error, token } = await stripe.createToken(cardNumberElement);

      if (error) {
        setMessage(`Erreur lors de la création du token : ${error.message}`);
        setIsProcessing(false);
        return;
      }

      // Simuler un envoi de token au backend pour traitement
      setMessage('Paiement simulé réussi.');
    } catch (error) {
      setMessage(`Erreur lors du paiement : ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-md rounded-lg p-6 w-full max-w-md">
        {/* Logos Visa et Mastercard */}
        <div className="flex justify-center mb-2 space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-16" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="w-16" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Numéro de carte */}
          <div>
            <label className="block text-gray-700">Numéro de carte</label>
            <CardNumberElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': { color: '#aab7c4' },
                  },
                },
              }}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Date d'expiration */}
          <div>
            <label className="block text-gray-700">Date d'expiration (MM/AA)</label>
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': { color: '#aab7c4' },
                  },
                },
              }}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className='flex'>
            {/* <label className="block text-gray-700">CVC</label>
            <label className="block text-gray-700">Code postal</label> */}
                      {/* CVC */}
            <CardCvcElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': { color: '#aab7c4' },
                  },
                },
              }}
              className="p-2 border border-gray-300 rounded w-1/2"
            />
          {/* Code postal */}
          <input
              type="text"
              placeholder="Code postal"
              className="p-2 border border-gray-300 rounded w-1/2"
            />

          </div>

          {/* Bouton de paiement */}
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            {isProcessing ? 'Traitement...' : 'Payer'}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

const Payment = () => {
  return (
  <div></div>
    //  <Elements stripe={stripePromise}>
    //   <PaymentForm />
    //  </Elements>
  );
};

export default Payment;
