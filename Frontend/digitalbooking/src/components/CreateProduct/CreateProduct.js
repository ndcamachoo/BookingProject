import React, { useState, useEffect } from "react";
import { ProductBanner } from "../ProductBanner/ProductBanner";
import styles from "./CreateProduct.module.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import availableServices from "./services";
import resources from "./resources";
import countChar from "../../functions/countChar";
import catData from "./catData";
import citiesData from "./citiesData";
import { LoginAnimation } from "../LoginAnimation/LoginAnimation";
import validate from "./validate";
import submitCheck from "./submitCheck";

export const CreateProduct = () => {
  const {
    creation,
    formContainer,
    title,
    form,
    item,
    itemdown,
    categories,
    cities,
    itemDescription,
    services,
    checkItem,
    policiesContainer,
    policiesItem,
    imgContainer,
    buttonCreate,
    itemsContainer,
    error,
  } = styles;
  const [checkedServices, setCheckedServices] = useState(
    Array.prototype.slice.call(
      document.querySelectorAll("[type=checkbox]:checked")
    )
  );
  const user = JSON.parse(localStorage.getItem("data"))
  const userEmail = user && user.sub;
  const [cat, setCat] = useState();
  const [filesUrl, setFilesUrl] = useState([]);
  const [prodCity, setprodCity] = useState();
  const [formvalues, handleInputChange] = useForm({
    productAddress: "",
    productName: "",
    productCategory: "",
    city: "",
    lat: "",
    long: "",
    pricePerNight: 0,
    productDescription: "",
    houseRules: "",
    healthSafety: "",
    cancellationPolicy: "",
  });
  const [message, setmessage]= useState();
  const [errorsm, setErrorsM] = useState({});
  const [submitable, setSubmitable] = useState();
  const [success, setsuccess] = useState();
  const [checkedBoxes, setCheckedBoxes] = useState();
  const [trigger, setTrigger] = useState(false);
  const [files, setFiles] = useState([]);
  const {
    productAddress,
    productName,
    productCategory,
    city,
    lat,
    long,
    productDescription,
    pricePerNight,
    houseRules,
    healthSafety,
    cancellationPolicy,
  } = formvalues;
  const bearer = `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  const urlFetch = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products/save`;

 
  let fetchInfo = {
    productName: productName,
    productDescription: productDescription,
    photoGallery: filesUrl,
    user: {
      email: userEmail,
    },
    productAddress: productAddress,
    city: {
      name: `${city.split(", ")[0]}, ${city.split(", ")[1]}`,
      country: city !== "" && `${city.split(", ")[2]}`,
    },
    coordinates: [lat, long],
    productCategory: {
      name: productCategory,
    },
    services: checkedServices,
    pricePerNight: pricePerNight,
    productAvailable: true,
    houseRules: houseRules,
    healthSafety: healthSafety,
    cancellationPolicy: cancellationPolicy,
  };
  let history = useHistory();

  catData.then((products) => {
    setCat(products);
  });

  citiesData.then((products) => {
    setprodCity(products);
  });

  const url =
    "https://cors-everywhere-me.herokuapp.com/G4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/files/upload";


  const onFileUpload = (event) => {
    event.preventDefault();
    let files = event.target.files;
    Object.entries(files).map((file) => {
      setFiles((files) => [...files, file[1]]);
    });
  };

  const handleChecked = () => {
    setCheckedBoxes(
      Array.prototype.slice.call(
        document.querySelectorAll("[type=checkbox]:checked")
      )
    );
  };

  useEffect(() => {
    checkedBoxes &&
      setCheckedServices(checkedBoxes.map((service) => service.defaultValue));
  }, [checkedBoxes]);

  useEffect(() => {
    setSubmitable(submitCheck(fetchInfo))
 
  }, [fetchInfo])

  const HandleSubmit = (e) => {
    e.preventDefault();
    setErrorsM(validate(fetchInfo));
    setmessage();
    if (files.length === 5) {
      files.map((file, idx) => {
        let dataFile = new FormData();
        dataFile.append("file", file);

        fetch(url, resources.settings("POST", dataFile))
          .then((res) => res.json())
          .then((data) =>{
            (document.querySelector(`li:nth-child(${idx + 1})`).innerHTML +=
                    "✅ Subido!");
            setFilesUrl((filesUrl) =>[...filesUrl, data.url])        
          })
          .catch(
            (err) =>
              (document.querySelector(`li:nth-child(${idx + 1})`).innerHTML +=
                "❌ Error!")
          );
      });
    } else {
      alert("Deben ser 5 archivos en la galeria");
    }
    
  };

  useEffect(() => {
    
    if (filesUrl.length >= 5 && submitable) {
      fetch(urlFetch,{
        method: "POST",
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(fetchInfo),
      })
      .then(response => {
        if (!response.ok) throw Error(response.status);
        return response;
      })
      .then(response => {
        setmessage("Producto creado exitosamente. Redirigiendo al home");
        setsuccess("true");
        setTimeout(() => {
           history.push("/");
           window.location.reload(); 
        }, 2000);
      })
      .catch(error => { 
        setmessage("Error al realizar el registro.");
        setsuccess(false) 
      }); 
    };
  }, [filesUrl])

  const handleReset = (e) => {
    setFiles([]);
    document.querySelector("input[type='file']").value = "";
  };

  return (
     <div className={creation}>
      { success && <LoginAnimation message= { message }/>}  
      <ProductBanner title="Producto" subtitle="Administración" />
      <div className={formContainer}>
        <h4 className={title}>Crear producto</h4>
        <form onSubmit={HandleSubmit} className={form}>
          <section className={itemsContainer}>
            <div className={item}>
              <p>Nombre de la propiedad</p>
              <input
                name="productName"
                value={productName}
                onChange={handleInputChange}
                type="text"
              />
              {errorsm.productName && <h6 className={error}>{errorsm.productName}</h6>}
            </div>
            <div className={item}>
              <p>Categoría</p>
              <select
                name="productCategory"
                value={productCategory}
                onChange={handleInputChange}
                className={categories}
              >
                <option value="" disabled selected>
                  Seleccionar categoría
                </option>
                {cat &&
                  cat.map((category, index) => (
                    <option index={index}>{category.description}</option>
                  ))}
              </select>
              {errorsm.productCategory && <h6 className={error}>{errorsm.productCategory}</h6>}
            </div>
            <div className={item}>
              <p>Dirección</p>
              <input
                name="productAddress"
                value={ productAddress }
                onChange={handleInputChange}
                type="text"
              />
              {errorsm.productAddress && <h6 className={error}>Este campo es requerido</h6>}
            </div>
            <div className={item}>
              <p>Ciudad</p>
              <select
                name="city"
                className={cities}
                value={city}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Seleccionar ciudad
                </option>
                {prodCity &&
                  prodCity.map((prodCity, index) => (
                    <option
                      index={index}
                    >{`${prodCity.name}, ${prodCity.country}`}</option>
                  ))}
              </select>
              {errorsm.city && <h6 className={error}>{errorsm.city}</h6>}
            </div>
            <div className={item}>
              <p>Latitud</p>
              <input
                name="lat"
                value={lat}
                type="text"
                onChange={handleInputChange}
              />
              {errorsm.lat && <h6 className={error}>{errorsm.lat}</h6>}
            </div>
            <div className={item}>
              <p>Longitud</p>
              <input
                name="long"
                value={long}
                type="text"
                onChange={handleInputChange}
              />
              {errorsm.long && <h6 className={error}>{errorsm.long}</h6>}
            </div>            
            <div className={item}>
              <p>Precio por noche</p>
              <input
                name="pricePerNight"
                placeholder= "$"
                value={ pricePerNight }
                type="text"
                onChange={handleInputChange}
              />
              {errorsm.pricePerNight && <h6 className={error}>{errorsm.pricePerNight}</h6>}
            </div> 
          </section>
          <section className={itemDescription}>
            <p>Descripción</p>
            <textarea
              name="productDescription"
              value={productDescription}
              onChange={handleInputChange}
              placeholder="Escribe aquí"
              maxlength="200"
              onKeyUp={countChar}
            ></textarea>
            <span id="productDescription"></span>
            {errorsm.productDescription && <h6 className={error}>{errorsm.productDescription}</h6>}
          </section>
          <h4 className={title}>Seleccionar servicios</h4>
          {errorsm.services && <h6 className={error}>{errorsm.services}</h6>}
          <section className={services}>
            {availableServices.map((service, index) => (
              <div className={checkItem}>
                <label for={service.value}>
                  <input
                    type="checkbox"
                    id={service.value}
                    name={service.name}
                    value={service.value}
                    onChange={handleChecked}
                  />
                  {service.name}
                </label>
              </div>
            ))}
          </section>
          <h4 className={title}>Políticas del producto</h4>
          <section className={policiesContainer}>
            <div className={policiesItem}>
              <h4>Normas de la casa</h4>
              <p>Descripción (separar items con coma)</p>
              <textarea
                name="houseRules"
                placeholder="Escribe aquí"
                maxlength="500"
                value={houseRules}
                onKeyUp={countChar}
                onChange={handleInputChange}
              ></textarea>
              <p id="houseRules"></p>
              {errorsm.houseRules &&<h6 className={error}>{errorsm.houseRules}</h6>}
            </div>
            <div className={policiesItem}>
              <h4>Salud y seguridad</h4>
              <p>Descripción (separar items con coma)</p>
              <textarea
                name="healthSafety"
                placeholder="Escribe aquí"
                value={healthSafety}
                onChange={handleInputChange}
                maxlength="500"
                onKeyUp={countChar}
              ></textarea>
              <p id="healthSafety"></p>
             {errorsm.healthSafety && <h6 className={error}>{errorsm.healthSafety}</h6>}
            </div>
            <div className={policiesItem}>
              <h4>Política de cancelación</h4>
              <p>Descripción (separar items con coma)</p>
              <textarea
                name="cancellationPolicy"
                placeholder="Escribe aquí"
                maxlength="500"
                onChange={handleInputChange}
                onKeyUp={countChar}
              ></textarea>
              <p id="cancellationPolicy"></p>
             { errorsm.cancellationPolicy && <h6 className={error}>{errorsm.cancellationPolicy}</h6>}
            </div>
          </section>
          <h4 className={title}>Cargar imágenes</h4>
          <section className={imgContainer}>
            <input
              id={1}
              onChange={onFileUpload}
              accept=".jpeg, .png, .jpg"
              type="file"
              multiple
            />
            <ul>
              {" "}
              {files.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </section>
          { !success && <h6 className={error}>{message}</h6>}
          <button type="submit" className={buttonCreate}>
            Crear
          </button>
        </form>
      </div>
    </div> 
  );
};
