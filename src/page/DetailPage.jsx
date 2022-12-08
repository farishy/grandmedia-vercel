import "../component/detail/Detail.css";
import Navbar from "../component/landing/Navbar";
import Footer from "../component/landing/Footer";
import Recomendation from "../component/landing/Recomendation";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import StoreList from "../component/detail/storeLlist";

const DetailPage = () => {
	const { details: detail, isLoading, error } = useSelector((state) => state.details);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		dispatch(__getDetails(id));
		console.log("ngirim id")
	},[dispatch,id]);
	
	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		return (
			<div className="section-recomendation container my-5">
				<h1>Error in requesting data...</h1>
			</div>
		);
	}

	const handleClick = () => {
		createOrder();
	};
	const createOrder = async () => {
		try {
			await axios.post("https://grandemedia-clone-server.herokuapp.com/orders", { title: detail.title, weight: detail.berat, price: detail.newPrice, cover: detail.cover, count: 1 });
			navigate("/cart");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="containerDetail">
			<Navbar />
			<div className="body">
				<div className="container">
					<div className="grid grid-cols-3">
						<div className="grid grid-rows-1 grid-flow-col gap-4">
							<div className="row-span-4">
								<div className="card main-card">
									<img className="card-img-top" alt="" src={detail.cover}></img>
								</div>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4">
							<div className="row-span-8">
								<h4>{detail.author}</h4>
								<h2>{detail.title}</h2>
								<div className="tabs-book">
									<a href=" " className="active">Pilih Format Buku</a>
									<a href=" ">Deskripsi Buku</a>
									<a href=" ">Detail Buku</a>
								</div>

								{/* <Link to={'/cart'} style={{ textDecoration: "none" }}> */}
								<div className="col-10">
									<h5 className="formatbuku-text">Pilih format Buku yang Tersedia</h5>
									<div className="card-format">
										<div>
											<p className="card-text-format">SOFT COVER</p>
											<p className="card-text-start">mulai dari</p>
											<p className="card-text-prices">{`Rp ` + detail.price}</p>
										</div>
										<StoreList />
									</div>
								</div>

								{/* </Link> */}

								<h3 className="title-desc">Deskripsi Buku</h3>
								<p className="desc">{detail.description}</p>
							</div>
							<div className="detailPage">
								<h3>Detail</h3>
								<table className="table table-borderless">
									<thead>
										<tr>
											<th>Jumlah Halaman</th>
											<th>Penerbit</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{detail.jumlahHalaman}</td>
											<td>{detail.penerbit}</td>
										</tr>
										<tr>
											<th>Tanggal Terbit</th>
											<th>Berat</th>
										</tr>
										<tr>
											<td>{detail.tanggalTerbit}</td>
											<td>{detail.berat}</td>
										</tr>
										<tr>
											<th>ISBN</th>
											<th>Lebar</th>
										</tr>
										<tr>
											<td>{detail.isbn}</td>
											<td>{detail.panjang}</td>
										</tr>
										<tr>
											<th>Bahasa</th>
											<th>Panjang</th>
										</tr>
										<tr>
											<td>{detail.bahasa}</td>
											<td>{detail.panjang}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div >

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-2">
								<div className="card-body  col-10">
									<p className="card-text">Mohon pilih format terlebih dahulu</p>
								</div>
							</div>
						</div>
					</div >

					<div className="recomendation">
						<Recomendation />
					</div>
				</div >
			</div >
			<Footer />
		</div >
	);
};

export default DetailPage;
