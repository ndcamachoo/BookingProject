package com.dh.proyectointegradorctd.security;

import com.dh.proyectointegradorctd.model.*;
import com.dh.proyectointegradorctd.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;

@Component
public class DataLoader implements ApplicationRunner {

    /* ================== Atributos ====================== */

    private final UserService userService;
    private final RoleService roleService;
    private final CategoryService categoryService;
    private final ProductService productService;
    private final CityService cityService;
    private final AssetService assetService;
    private final ReservationService reservationService;
    private final StatService statService;

    /* ==================== Métodos ===================== */

    @Override
    public void run(ApplicationArguments args) {

        assetService.initAssetDatabase();

        Role userRole = new Role("USER");
        Role adminRole = new Role("ADMIN");
        Role rootRole = new Role("ROOT");

        roleService.save(userRole);
        roleService.save(adminRole);

        User us1 = new User("admin","admin", "admin@dh.com", "admin", adminRole);
        us1.setStatus("ENABLED");
        User us2 = new User("user","user" ,"user@dh.com", "user", userRole);
        us2.setStatus("ENABLED");
        userService.save(us1);
        userService.save(us2);

        Category cat1 = new Category("Hoteles", "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "Hoteles");
        Category cat2 = new Category("Cabañas", "https://media.istockphoto.com/photos/triangular-modern-lake-house-picture-id1296723838?b=1&k=20&m=1296723838&s=170667a&w=0&h=ypMLh0bMVdTYbeaYwUe6HhLVsxEmtHkz42zlAJWWBsU=", "Cabañas");
        Category cat3 = new Category("Casas del árbol", "https://images.unsplash.com/photo-1519378045141-f05b62faa055?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "Casas del árbol");
        Category cat4 = new Category("Islas", "https://media.istockphoto.com/photos/young-woman-walks-towards-beautiful-beach-picture-id1311063862?b=1&k=20&m=1311063862&s=170667a&w=0&h=ai-8qth6hlECiFoQR4g9Wt1cZHdrvsCsSAnyzGP2d3E=", "Islas");
        Category cat5 = new Category("Departamentos de lujo", "https://media.istockphoto.com/photos/modern-living-room-interior-design-in-3d-picture-id1266344111?b=1&k=20&m=1266344111&s=170667a&w=0&h=BA3pRBcHDybIXYXMrwXFeNQm8c73BsZJCQklQAFlWNg=", "Departamentos de lujo");
        Category cat6 = new Category("Castillos", "https://images.unsplash.com/photo-1435265796918-0e3d3e4af435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGNhc3RsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "Castillos");
        Category cat7 = new Category("Barcos", "https://images.unsplash.com/photo-1605472075651-a1f8d550f508?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "Barcos");
        Category cat8 = new Category("Contenedores", "https://images.unsplash.com/photo-1628394029749-ea3dcce4caa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFpbmVyJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "Contenedores");

        categoryService.save(cat1);
        categoryService.save(cat2);
        categoryService.save(cat3);
        categoryService.save(cat4);
        categoryService.save(cat5);
        categoryService.save(cat6);
        categoryService.save(cat7);
        categoryService.save(cat8);

        City city1 = new City("Buenos Aires, Capital Federal", "Argentina");
        City city2 = new City("Highclere Park, Highclere", "Reino Unido");
        City city3 = new City("Bogotá, Cundinamarca", "Colombia");
        City city4 = new City("Boa Vista, Río de Janeiro", "Brasil");
        City city5 = new City("San Francisco, Cundinamarca", "Colombia");
        City city6 = new City("Islas San Blas, San Blas", "Panamá");
        City city7 = new City("Villa La Angostura, Neuquén", "Argentina");
        City city8 = new City("Villa General Belgrano, Córdoba", "Argentina");
        City city9 = new City("Córdoba, Córdoba", "Argentina");
        City city10 = new City("Medellín, Antioquia", "Colombia");
        City city11 = new City("Huasca de Ocampo, Hidalgo", "México");
        City city12 = new City("Provincia de Cartagena, Bolívar", "Colombia");
        City city13 = new City("Bolton, Nueva York", "Estados Unidos");
        City city14 = new City("Gran Roque, Caribe", "Venezuela");
        City city15 = new City("Valdivia, Los Ríos", "Chile");

        cityService.save(city1);
        cityService.save(city2);
        cityService.save(city3);
        cityService.save(city4);
        cityService.save(city5);
        cityService.save(city6);
        cityService.save(city7);
        cityService.save(city8);
        cityService.save(city9);
        cityService.save(city10);
        cityService.save(city11);
        cityService.save(city12);
        cityService.save(city13);
        cityService.save(city14);
        cityService.save(city15);

        Product pd1 = new Product("Amazing Luxurious Apt-Palermo Soho", "Luxury building in the heart of the trendy Palermo Soho. 24-hour security", LocalDate.of(2009,4,13), Arrays.asList("https://a0.muscache.com/im/pictures/c5cd9326-df4d-4b63-960b-4d64a95d04a1.jpg","https://a0.muscache.com/im/pictures/dcea15c9-1165-4012-ae05-291744953799.jpg","https://a0.muscache.com/im/pictures/ad19a0b4-ab77-4e5b-ac5a-eb64d03c7118.jpg", "https://a0.muscache.com/im/pictures/3df8765e-5013-45f4-9eb8-2d2d2eb20e82.jpg", "https://a0.muscache.com/im/pictures/09f10f8f-5215-455a-bb6f-3df43be49e6d.jpg"), us1, city1,"P Sherman calle Wallaby 42", Arrays.asList("-34.58184","-58.42415"), cat4, 2, 2, Arrays.asList("Wifi", "Cable TV", "kitchen","parking", "jacuzzi"), 3, 30, 4.7, 4, 6408.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd2= new Product("Castillo de Highclere", "El castillo de Highclere es una mansión de campo victoriana de estilo Isabelino, con un parque diseñado por Capability Brown.", LocalDate.of( 2021, 10,25), Arrays.asList("https://news.airbnb.com/wp-content/uploads/sites/4/2019/09/DA_PDP_listing_A_1440x960.jpg", "https://news.airbnb.com/wp-content/uploads/sites/4/2019/09/DA_PDP_listing_B_1440x960.jpg", "https://news.airbnb.com/wp-content/uploads/sites/4/2019/09/Library_JL1.jpg", "https://news.airbnb.com/wp-content/uploads/sites/4/2019/09/Dining-Room_JL1.jpg", "https://news.airbnb.com/wp-content/uploads/sites/4/2019/09/DA_PDP_listing_C_1440x960.jpg"), us1, city2, "P Sherman calle Wallaby 42",Arrays.asList("51.3265901","-1.360666"), cat6, 12, 20, Arrays.asList("Wifi", "Pool", "Cable TV", "kitchen","petsallowed", "jacuzzi"), 3, 30, 9.7, 10, 15800.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd3= new Product("Hermoso Apartaestudio", " Apartaestudio exterior con vista y muy iluminado. Excelente ubicación cerca a restaurantes, vías principales y comercios.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/miso/Hosting-36114551/original/32ec5b48-2e79-4ab7-a080-294f1387de80.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-36114551/original/32ec5b48-2e79-4ab7-a080-294f1387de80.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-36114551/original/c4817130-c76e-47cf-a4c0-7474be7bb854.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-36114551/original/28cd1677-590b-4a0d-97cf-1b360623bb5d.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-36114551/original/6eb7a0b3-3840-4917-ba22-0bcf3039e979.jpeg"), us1, city3, "P Sherman calle Wallaby 42", Arrays.asList("4.72079677649355", "-74.04773038930063"), cat8, 12, 20, Arrays.asList("Wifi", "kitchen"," parking", "airconditioning"), 3, 30, 7.8, 9, 15800.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd4= new Product("Charmoso Barco para hospedagem", " Venha conhecer Paraty a bordo de uma charmosa e confortável traineira.", LocalDate.of( 2021, 10,25), Arrays.asList("https://media.istockphoto.com/photos/mature-couple-relax-on-sailboat-moving-through-lake-lugano-picture-id1291612564?b=1&k=20&m=1291612564&s=170667a&w=0&h=U4C64eA0a0PEhSrcVIJVU0_7S7axUg5hM5GBb9qJ1pM=", "https://media.istockphoto.com/photos/luxury-yacht-interior-yacht-cabin-picture-id488535882?b=1&k=20&m=488535882&s=170667a&w=0&h=GHK9MRZfvhais0R3OD5crCdunaTHxDmkaX-ZFo0S8SQ=", "https://media.istockphoto.com/photos/two-rows-of-tables-in-a-high-profile-restaurant-picture-id1280320628?b=1&k=20&m=1280320628&s=170667a&w=0&h=HIaSxK7IWPTqK6KD4cLfEgV9PxYBtIjWyRfwqIIBJwI=", "https://media.istockphoto.com/photos/flybridge-deck-luxury-motor-yacht-picture-id184102928?b=1&k=20&m=184102928&s=170667a&w=0&h=iT62m3cbebdFWB3uBX8tMaG8vtSsnKZLY2gYxUFcY5A=", "https://media.istockphoto.com/photos/yacht-interiors-1-picture-id172193367?b=1&k=20&m=172193367&s=170667a&w=0&h=gFL945xYpCmK24QofNoNx8sZix62wRmTG3iMl96gCbw="), us1, city4, "P Sherman calle Wallaby 42", Arrays.asList("2.8011959522175727", "-60.669441776269906"), cat7, 12, 20, Arrays.asList("Wifi", "kitchen","breakfast", "smokingallowed"), 3, 30, 9.7, 7, 15800.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd5= new Product("Selva Luxury Cabin - San Francisco", " Disfruta de la naturaleza en esta cabaña ubicada en medio de la selva! A una hora de Bogota, a 9km del pueblo.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/6ff2f094-2f17-49b7-b04e-e42a05fddaf5.jpg", "https://a0.muscache.com/im/pictures/504dd6c0-a7b7-4db1-ac98-3a2f6b435d59.jpg", "https://a0.muscache.com/im/pictures/f68cc9cb-cdbe-4851-8fe2-b9f238e3099b.jpg", "https://a0.muscache.com/im/pictures/b7b5de92-0c01-4025-a76f-205d29494270.jpg", "https://a0.muscache.com/im/pictures/0640568b-770b-4d12-bb11-8617206c137c.jpg"), us1, city5, "P Sherman calle Wallaby 42", Arrays.asList("4.976127", "-74.293675"), cat3, 12, 20, Arrays.asList("Wifi", "Cable TV", "kitchen","petsallowed", "breakfast"), 3, 30, 9.7, 10, 18800.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd6= new Product("San Blas Islands, Dad Igwa", " Discover our Dad Igwa all-inclusive cabins at Isla Diablo,San Blas Islands.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/prohost-api/Hosting-44403796/original/9ae9d110-ec49-44cd-a165-2da4be248dd5.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-44403796/original/24e8127c-e716-41e0-9837-33474efd589a.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-44403796/original/b3cd15a6-5c9a-4593-b4f1-bd922b023efc.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-44403796/original/24db7105-8d54-47ae-84d4-f290cbc96cdd.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-44403796/original/f9e22577-703c-4810-9ac5-720a895e4a8a.jpeg"), us1, city6, "P Sherman calle Wallaby 42", Arrays.asList("9.569049", "-78.822618"), cat4, 12, 20, Arrays.asList("Wifi", "kitchen","breakfast", "jacuzzi"), 3, 30, 9.7, 10, 26900.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd7= new Product("La Estancia Casa Del Parque", " Excelente cabaña con todos los servicios y equipamiento ,con detalles de calidad y confort..", LocalDate.of( 2021, 10,25), Arrays.asList("https://cf.bstatic.com/xdata/images/hotel/max1024x768/268712888.jpg?k=534aeadd0874a40bb4d162da3497365024d00690865a46eef9aac78de6a0947f&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32663173.jpg?k=57ca7d08d479ed97b1c757ac7985e06c81a7f45d318ee9f3e0d356e19b14c225&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32691298.jpg?k=e06b7e2ddd79837461324348cd37bd2aeb9cf6cc33098d73043776bd24c3c0e5&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75667568.jpg?k=708c36e3334dfa4729e9304ccf06db2b89b8990984eb426fe730b6149eeccc1a&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268497449.jpg?k=b6e464964e8a623edf7c15e1f60e01d2bef70be8e8d342bf67c485918142cc1f&o=&hp=1"), us1, city7, "P Sherman calle Wallaby 42", Arrays.asList("-40.764326", "-71.645748"), cat2, 12, 20, Arrays.asList("Wifi", "Cable TV", "kitchen","petsallowed", "parking"), 3, 30, 9.7, 9, 18900.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd8= new Product("Hotel Howard Johnson", " Contamos con 46 habitaciones de 35 m², con vista hacia las sierras chicas o a nuestro majestuoso parque.", LocalDate.of( 2021, 10,25), Arrays.asList("https://cf.bstatic.com/xdata/images/hotel/max1024x768/39018330.jpg?k=5deb68ea5214a820b953afa0ee4a929e8be51cba464298444388cf6812fb39f0&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39018339.jpg?k=e21862d3c10444b6edffc53abadb4033913ab34c0672ac37dc92fff6a8fcd32e&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39018382.jpg?k=a3e03c665082b6b22d4bbf7de115461324687717b6f96f4bd6ce1e1399cbe4c9&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39018385.jpg?k=d039cd25104db693de21cfd0c17bd5ba50716f387516503b8378470665a1c5a9&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39018390.jpg?k=368516bb96e83caddf311717a803d32551a73a762a40b93a94d86382173e122b&o=&hp=1"), us1, city8, "P Sherman calle Wallaby 42", Arrays.asList("-31.993200", "-64.558006"), cat1, 12, 20, Arrays.asList("Wifi", "Pool", "breakfast", "jacuzzi", "parking"), 3, 30, 9.7, 8, 10800.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd9= new Product("Selina Deluxe Room", "Selina is located in Nueva Córdoba, one of the cultural and commercial centers of the city.", LocalDate.of( 2021, 10,25), Arrays.asList("https://cf.bstatic.com/xdata/images/hotel/max1024x768/218402915.jpg?k=7e61cd458922631e993db3a07d72b6edda60f9c3745f14749ca991c6bc596467&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218403936.jpg?k=82b87d89eee970130eb194b7ec68aa473a42db471f04d345ecdcf3ea9fd57239&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218402877.jpg?k=c1ca9198e1fbc11a49b0a7f69a823c3a48fe32815fc42c31a55312d6d08af4a8&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218396565.jpg?k=7ad0105eeb27116f389477420e34207a432de1bdfec694dfc436977697406a36&o=&hp=1", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218398073.jpg?k=3868658d3b5d556ae20ca3739026ccfd985102edd08db5aa8148ceb33384570b&o=&hp=1"), us1, city9, "P Sherman calle Wallaby 42", Arrays.asList("-31.423701", "-64.185071"), cat1, 4, 30, Arrays.asList("Wifi", "Pool", "breakfast", "kitchen","parking"), 3, 30, 9.7, 8, 5800.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd10= new Product("Chalet Cocuyos Santa Elena.", "Sobre la montaña y bajo las estrellas podrás habitar un espacio acogedor y autentico rodeado de bosque y flores.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/miso/Hosting-50045592/original/a535c125-3138-45f6-9c49-d399f1d6afa1.jpeg", "https://a0.muscache.com/im/pictures/d99f8917-4a7b-443f-8e46-ce6c00959dc9.jpg", "https://a0.muscache.com/im/pictures/miso/Hosting-50045592/original/1bd5e08e-63f0-4711-ac47-600acc8138b4.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-50045592/original/8b0a716b-3838-4c79-b6cf-247fcfc2f894.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-50045592/original/b422a1ea-192d-41ab-ae39-6b88ce35ffbe.jpeg"), us1, city10,"P Sherman calle Wallaby 42", Arrays.asList("6.258841", "-75.546055"), cat2, 4, 1, Arrays.asList("Wifi", "Pool", "Cable TV", "petsallowed"), 3, 30, 9.7, 10, 15700.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd11= new Product("Casa del Árbol Pinochueco.", "La casa del árbol Pinochueco es un lugar distinto en el que podrás disfrutar de un descanso entre los árboles.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/d3a2a712-cf11-4886-925b-1290f0e0fb1a.jpg", "https://a0.muscache.com/im/pictures/bb1c0c68-c06b-40f8-810a-36b32f46546e.jpg", "https://a0.muscache.com/im/pictures/577d13ec-25e1-4e37-93ca-f91824da9a9a.jpg", "https://a0.muscache.com/im/pictures/f0489bd5-816e-45ad-8c17-2b2c84b8600c.jpg", "https://a0.muscache.com/im/pictures/3cfcd52f-eff1-4c72-ae95-0641713b810f.jpg"), us1, city11, "P Sherman calle Wallaby 42", Arrays.asList("20.202231", "-98.575312"), cat3, 4, 2, Arrays.asList("Wifi", "Cable TV", "kitchen"), 3, 30, 9.7, 8, 8700.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd12= new Product("Oasis Kalua", "Enjoy our exclusive private island located in the Rosario Islands.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/5b50ac57-8eca-4b8b-be51-43a7155ed37a.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/df072e91-5a50-4c04-ac97-80aad69ec55d.jpeg", "https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/f1f4f807-b77f-4223-98f0-3afaa11520f6.jpeg", "https://a0.muscache.com/im/pictures/fa6ed6b1-1197-42de-831c-b58bb6d2a007.jpg", "https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/2d3bdedf-6ffc-4c17-9a3a-a6cb02e2974f.jpeg"), us1, city12, "P Sherman calle Wallaby 42", Arrays.asList("10.425877", "-75.506332"), cat4, 4, 2, Arrays.asList("Wifi", "Pool", "kitchen","petsawolled"), 3, 30, 9.7, 10, 9700.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd13= new Product("Apartamento de Super Lujo en Av Alvear", "Espectacular piso en el mejor sector de Av. Alvear entre Montevideo y Parera.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/prohost-api/Hosting-53239050/original/34a0106d-3622-4eab-b501-1f9e7904a380.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53239050/original/9a0f403f-459a-4a7c-8923-742027a0e048.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53239050/original/19f03b4a-d133-4c38-9a95-bb432eb5fc7c.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53239050/original/1509c25c-d6c2-45ee-8d1a-d1646e3a251a.jpeg", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53239050/original/212034a5-fa12-46bc-9860-3215f05d76e6.jpeg"), us1, city1, "P Sherman calle Wallaby 42", Arrays.asList("-34.588392", "-58.387988"), cat5, 4, 1, Arrays.asList("Wifi", "Cable TV", "kitchen","jacuzzi", "parking"), 3, 30, 9.7, 7, 12700.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd14= new Product("Highlands Castle", "Poised on a graceful mountaintop overlooking majestic Lake George, your castle awaits you...", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/a57ab9ea-80d5-4ed0-aa15-ce536039778d.jpg", "https://a0.muscache.com/im/pictures/2ea6c421-8009-442b-94c2-9a95a39ce51c.jpg", "https://a0.muscache.com/im/pictures/14e1aadd-5256-421d-9f12-21600f39a8b4.jpg", "https://a0.muscache.com/im/pictures/2907b9e5-5072-46db-be23-a139d5be2081.jpg", "https://a0.muscache.com/im/pictures/2907b9e5-5072-46db-be23-a139d5be2081.jpg", "https://a0.muscache.com/im/pictures/6797bbbb-8164-4a11-985c-fdeb1e7feabf.jpg"), us1, city13, "P Sherman calle Wallaby 42", Arrays.asList("-43.553649", "-73.656716"), cat6, 10, 1, Arrays.asList("Wifi", "Pool", "jacuzzi","kitchen", "petsallowed"), 3, 30, 9.7, 9, 25700.0,true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd15= new Product("Catamaran Charter Todo Incluido", "Entre a bordo de nuestro catamaran para escapar a unas vacaciones excepcional.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/b8f3188f-5af7-4686-83bd-88f77cc81677.jpg", "https://a0.muscache.com/im/pictures/8a34b065-9d53-482f-9ec2-bad7809191e1.jpg", "https://a0.muscache.com/im/pictures/f728711f-e4d2-4a8c-a176-134ad37654b0.jpg", "https://a0.muscache.com/im/pictures/87dc8a8b-66d6-4277-a0bf-44587a140c8d.jpg", "https://a0.muscache.com/im/pictures/bc485e23-b559-42f9-a7fb-df414eb5b209.jpg"), us1, city14, "P Sherman calle Wallaby 42", Arrays.asList("11.953442", "-66.674499"), cat7, 10, 1, Arrays.asList("kitchen","petsallowed","breakfast"), 3, 30, 9.7, 8, 15500.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");
        Product pd16= new Product("Refugio bosque/lago Outscape P. Fuy", "El Refugio es perfecto para una pareja, aunque también puede recibir 1 o 2 niños pequeños.", LocalDate.of( 2021, 10,25), Arrays.asList("https://a0.muscache.com/im/pictures/b3c484f7-11b6-490b-90e1-6a5749c3993f.jpg", "https://a0.muscache.com/im/pictures/7939b8e2-c586-4919-9bfb-0d0b7620cafa.jpg", "https://a0.muscache.com/im/pictures/27645a75-f008-43c7-8e66-291a771f219f.jpg", " https://a0.muscache.com/im/pictures/9ae38303-ab70-494a-be29-baca47e26a94.jpg", "https://a0.muscache.com/im/pictures/5f49ece6-ac09-4ac0-a5a0-0f0b2cec6dab.jpg"), us1, city15, "P Sherman calle Wallaby 42", Arrays.asList("-39.835615", "-73.253001"), cat8, 5, 1, Arrays.asList("Wifi", "kitchen","Refrigerator", "petsallowed", "parking"), 3, 30, 9.7, 9, 9500.0, true, "Check-out 10:00am.,No se permiten fiestas.,Fumar.", "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.,Detector de humo.,Depósito de seguridad.", "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.");

        productService.save(pd1);
        productService.save(pd2);
        productService.save(pd3);
        productService.save(pd4);
        productService.save(pd5);
        productService.save(pd6);
        productService.save(pd7);
        productService.save(pd8);
        productService.save(pd9);
        productService.save(pd10);
        productService.save(pd11);
        productService.save(pd12);
        productService.save(pd13);
        productService.save(pd14);
        productService.save(pd15);
        productService.save(pd16);

        Reservation rs1 = new Reservation(us1, pd1, LocalTime.of(13,0), LocalDate.of(2021,11,15), LocalDate.of(2021,11,20), true);

        reservationService.save(rs1);

        Stat stat1 = new Stat(us1, pd1, 4.8, true);
        statService.save(stat1);
    }

    /* =================== Constructor =====================*/

    @Autowired
    public DataLoader(UserService userService, RoleService roleService, CategoryService categoryService, ProductService productService, CityService cityService, AssetService assetService, ReservationService reservationService, StatService statService) {
        this.userService = userService;
        this.roleService = roleService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.cityService = cityService;
        this.assetService = assetService;
        this.reservationService = reservationService;
        this.statService = statService;
    }
}
