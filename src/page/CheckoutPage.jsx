import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../component/landing/Footer";
import Navbar from "../component/landing/Navbar";
// import { __getCheckout } from "../../redux/modules/slice";
// import { useDispatch, useSelector } from "react-redux";

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 3rem;
`;

const Card = styled.div`
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CardRincian = styled.div`
  padding: 1.5rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 1.5rem;
  background-color: white;
`;

const ContentRincian = styled.div`
  padding: 1.5rem;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 1.5rem;
  background-color: white;
  .total-biaya {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
  }
`;

const CardOrder = styled.div`
  padding: 0.5rem 2rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 1.5rem;
`;

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 3.75fr 1.5fr 1fr;
  padding: 1rem;
  gap: 1rem;
  .image-container {
    height: 80px;
  }
`;

const FooterOrder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ccdfef;
  padding: 1rem 3rem 1rem 3rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 0 0 1rem 1rem;
`;

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

//   const { checkout, isLoading, error } = useSelector((state) => state.details);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(__getCheckout());
// 	}, [dispatch]);

// 	if (isLoading) {
// 		return <h1>Loading</h1>;
// 	}

// 	if (error) {
// 		return (
// 			<div className="section-recomendation container my-5">
// 				<h1>Error in requesting data...</h1>
// 			</div>
// 		);
// 	}

  return (
    <>
      <Navbar />
      <div
        className="p-5"
        style={{ marginLeft: "8.75rem", marginRight: "8.75rem" }}
      >
        <h4 className="fw-bold mb-3">Tas Keranjang</h4>
        <ContentSection>
          <div>
            <Card>
              <div className="text-end">
                <Button
                  variant="link"
                  className="text-decoration-none text-black"
                >
                  <b>Hapus Beberapa</b>
                </Button>
              </div>
            </Card>
            <CardOrder>
              <div className="my-3">
                <span className="me-4">
                  <b>Pesanan 1</b>
                </span>
                <span className="my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-shop-window"
                    viewBox="0 0 16 16"
                    className="me-1"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>{" "}
                  <small>Gramedia Official - Matraman</small>
                </span>
              </div>
              <BookContainer>
                <img
                  className="image-container"
                  src="https://cdn.gramedia.com/uploads/items/9786020523316_Melangkah_UV_Spot_R4-1__w82_hauto.jpg"
                />

                <div className=" my-auto">
                  <small>Melangkah</small>
                  <br></br>
                  <small>Soft Cover - 1 Barang (0.25 kg) </small>
                  <br></br>
                  <small>
                    <strike>Rp 93.000</strike> <b>Rp69.750</b>
                  </small>
                </div>
                <div className="d-flex gap-3 align-items-center justify-content-center">
                  {/* <Button size="sm" className="rounded-circle"> */}
                  <div onClick={() => setQuantity(quantity - 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#0060ae"
                      class="bi bi-dash-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </div>
                  {/* </Button> */}
                  <small>{quantity}</small>
                  {/* <Button size="sm" className="rounded-circle"> */}
                  <div onClick={() => setQuantity(quantity + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#0060ae"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                  {/* </Button> */}
                </div>
                <div className="d-flex flex-column text-end">
                  <small>
                    <b>Rp69.750</b>
                  </small>
                  <br></br>
                  <a
                    href="#link"
                    role="button"
                    className="text-decoration-none text-black"
                  >
                    <small>Hapus</small>
                  </a>
                </div>
              </BookContainer>
            </CardOrder>
            <FooterOrder>
              <div>
                <h5>Total Pesanan 1</h5>
              </div>
              <div className="text-end">
                <h5>Rp69.750</h5>
              </div>
            </FooterOrder>
          </div>
          <div>
            <CardRincian>
              <h4 className="fw-bold">Rincian Belanja</h4>
              {/* <div className="text-end">
                <Button
                  variant="link"
                  className="text-decoration-none text-black"
                >
                  <b>Hapus Beberapa</b>
                </Button>
              </div> */}
            </CardRincian>
            <ContentRincian>
              <div className="total-biaya">
                <b>Total Biaya Belanja</b>
                <b>Rp 160.500</b>
              </div>
              <Button
                className="w-100 mt-4"
                style={{
                  backgroundColor: "#0060ae",
                  color: "#fff",
                  borderRadius: "1rem",
                }}
              >
                Melakukan Pembelian
              </Button>
            </ContentRincian>
          </div>
        </ContentSection>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
