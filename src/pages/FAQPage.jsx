import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import '../pages/FAQPage.css'
export default function FAQAccordion() {
  return (
    <div>
      {/* ---------------------------------------------Navbar start------------------------------------------------------------- */}
      <NavBar />
      {/* ---------------------------------------------Navbar End------------------------------------------------------------- */}
      <div className="faq-main-container">
        <div className="faq-main-content-container">
          {/* About The Corner Store */}
          <Typography variant="h5" sx={{ textAlign: "center", fontSize: '30px', fontWeight: '600' }} gutterBottom>
            About The Corner Store
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>What is The Corner Store?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                The Corner Store is your go-to online shop for quality products at fair prices.
                We focus on making everyday shopping simple, reliable, and enjoyable—just like
                your favorite local corner store, but online.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>Where are you located?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                We operate online to serve customers everywhere. Our warehouses and partners are
                strategically located to ensure efficient order fulfillment.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Orders & Shipping */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, textAlign: "center", fontSize: '30px', fontWeight: '600' }}>
            Orders & Shipping
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>How do I place an order?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Simply browse our website, add items to your cart, and proceed to checkout.
                Once payment is confirmed, you’ll receive an order confirmation email.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>Do you offer international shipping?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Yes, we ship to many countries worldwide. Shipping availability, costs, and
                delivery times may vary depending on your location.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>How long does shipping take?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Shipping times depend on your location and the shipping method selected at checkout.
                Estimated delivery times will be shown before you complete your order.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>How can I track my order?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Once your order ships, we’ll send you a tracking number via email so you can follow
                your package every step of the way.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Payments & Security */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, textAlign: "center", fontSize: '30px', fontWeight: '600' }}>
            Payments & Security
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                We accept major credit and debit cards, as well as other secure payment options
                displayed at checkout.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>Is my payment information secure?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Absolutely. We use secure, encrypted payment processing to keep your personal and
                financial information safe.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Returns & Refunds */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, textAlign: "center", fontSize: '30px', fontWeight: '600' }}>
            Returns & Refunds
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>What is your return policy?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                If you’re not satisfied with your purchase, you may be eligible for a return within
                a specified time frame after delivery. Items must be unused and in original condition.
                Please check our Return Policy page for full details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>How do I request a refund?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Contact our customer support team with your order number, and we’ll guide you through
                the process.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>When will I receive my refund?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Refunds are typically processed within a few business days after we receive and
                inspect the returned item. The time it takes to appear in your account depends on
                your payment provider.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Products & Availability */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, textAlign: "center", fontSize: '30px', fontWeight: '600' }}>
            Products & Availability
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>Are your products authentic?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Yes. We carefully source all products to ensure quality and authenticity.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>What if an item is out of stock?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                If an item is out of stock, it will be marked as such on the product page.
                Some items may be restocked—feel free to check back later.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Customer Support */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, textAlign: "center", fontSize: '30px', fontWeight: '600' }}>
            Customer Support
          </Typography>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>How can I contact The Corner Store?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                You can reach us through our Contact Us page or by email. Our support team is happy
                to help with any questions or concerns.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ my: '20px' }}>
            <AccordionSummary sx={{ backgroundColor: '#e2fff3' }} expandIcon={<ExpandMoreIcon sx={{ fontSize: '40px' }} />}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>What are your customer service hours?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b3e8d2' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Our support team responds during regular business hours. Response times may vary
                during peak periods, but we aim to reply as quickly as possible.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* --------------------------------------------Footer Start--------------------------------------------------- */}
      <Footer />
      {/* --------------------------------------------Footer End--------------------------------------------------- */}

    </div>
  );
}
