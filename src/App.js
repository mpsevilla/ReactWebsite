//CPAN 144 Project - Group 3
// Bruce Balutan
// Miguel Sevilla
// Paola Perez

import './App.css';
import react, { useState, useEffect, Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Routes, Route, BrowserRouter, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Adoption" element={<Adoption />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Donate" element={<Donation />} />
          <Route path="/Volunteering" element={<Volunteering />} />
          <Route path="/AdoptDog" element={<DogSearchForm />} />
          <Route path="/AdoptCat" element={<CatSearchForm />} />
          <Route path="/dog/:zipcode" element={<GetDogZip />} />
          <Route path="/cat/:zipcode" element={<GetCatZip />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

// -------------------------Navigation Bar and Footer Components for Routing to Different Pages-----------------------------

function NavBar() {
  return (
    <div>
      <Navbar bg={"dark"} variant={"dark"} sticky="top" expand="lg" collapseOnSelect>
        <Container >
          <Navbar.Brand >
            <LinkContainer to={"/"}>
              <Nav.Link><img src="https://thumbs.dreamstime.com/b/paws-vector-icon-isolated-black-background-92672110.jpg"
                width="40" height="40" className="d-inline-block align-top" alt="brand" /></Nav.Link>
            </LinkContainer>
          </Navbar.Brand>

        </Container>
        <Navbar.Toggle className="toggler" />
        <Navbar.Collapse>
          <Nav as="ul" className="NavLinks" >

            <LinkContainer to={"/About"}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/Adoption"}>
              <Nav.Link>Adoption</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Volunteering"}>
              <Nav.Link>Volunteering</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Registration"}>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer className="NavButton" variant={"dark"} to={"/Donate"}>
              <Button >Donate</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

function Footer() {
  const firstCol = { md: 3, lg: 3, xl: 3 };
  const secondCols = { md: 2, lg: 2, xl: 2 }
  const mainCols = { md: 3, lg: 2, xl: 2 };
  const thirdCol = { md: 4, lg: 3, xl: 3 };
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4" id="footer">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left">
            <Col className="mt-3 mx-auto" {...firstCol}>
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                Pet Adoption Agency About Us
              </h5>
              <p>We are an animal shelter that saves animals and gives them a new home</p>
            </Col>
            <Col className="mt-3 mx-auto" {...secondCols}>
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                Animals
              </h5>
              <p>
                <Link to={"/Adoption"} class="text-white" style={{ textDecoration: "none" }}>Dogs</Link>
              </p>
              <p>
                <Link to={"/Adoption"} class="text-white" style={{ textDecoration: "none" }}>Cats</Link>
              </p>
            </Col>
            <Col className="mt-3 mx-auto" {...mainCols}>
              <h5 class="text-uppercase mb-4 font-weight-bold text-white">
                Volunteering
              </h5>
              <p>
                <Link to={"/Volunteering"} className="text-white" style={{ textDecoration: "none" }}>Location One
                </Link>
              </p>
              <p>
                <Link to={"/Volunteering"} className="text-white" style={{ textDecoration: "none" }}>Location Two
                </Link>
              </p>
            </Col>
            <Col className="mx-auto mt-3" {...mainCols}>
              <h5 class="text-uppercase mb-4 font-weight-bold text-white">
                User
              </h5>
              <p>
                <Link to={"/Registration"} className="text-white" style={{ textDecoration: "none" }}>Register</Link>
              </p>
              <p>
                <Link to={"/Registration"} class="text-white" style={{ textDecoration: "none" }}>Sign in</Link>
              </p>

            </Col>
            <Col className="mx-auto mt-3" {...thirdCol}>
              <h5 class="text-uppercase mb-4 font-weight-bold text-white">
                Contact
              </h5>
              <p>
                Phone Number: 416 555 55555
              </p>
              <p>
                Email: AdoptionAgency@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>);
}

// -------------------------Page Components for Information on our Company, Registration, Donating etc.-----------------------------

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (<div >
    <div id="full">
      <Card border="light" className="pb-3 text-center font-weight-bold">
        <Card.Body>
          <Card.Img src="https://thumbs.dreamstime.com/b/dog-cat-together-wide-angle-9452010.jpg" className="card-image-top opacity-75" alt="title card" />
          <Card.ImgOverlay>
            <div className="p-4">
              <Card.Title>Pet Adoption Agency</Card.Title>
              <Card.Subtitle className="mb2 text-dark">Rescuing Toronto's Cats and Dogs</Card.Subtitle>
              <Card.Text className="font-weight-bold">
                All-volunteer, no-kill animal shelter
              </Card.Text>
              <LinkContainer variant={"dark"} to={"/Adoption"}>
                <Button>Adoption</Button>
              </LinkContainer>
            </div>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
      <Carousel activeIndex={index} onSelect={handleSelect} className="p-4" id="carousel">
        <Carousel.Item id="centering">
          <img className="d-block w-100"
            src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/96113454_10158886987899869_4813047378187649024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=sOTmRH0PvBIAX8E25VZ&_nc_ht=scontent-ord5-1.xx&oh=00_AT8nlUlA4BwLL0AZmnbPNVZhn02lMAc0ZF04HM4yrhMkvA&oe=6316F29A"
            alt="First slide" id="carousel" />
          <Carousel.Caption>
            <h1>Pet Adoption Agency</h1>
            <LinkContainer variant={"dark"} to={"/About"}>
              <Button>About Us</Button>
            </LinkContainer>
            <p>Learn more about what we do</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="centering">
          <img className="d-block w-100"
            src="https://etobicokehumanesociety.com/wp-content/uploads/2020/08/group-volunteer-ehs.jpg"
            alt="Second slide" id="carousel" />
          <Carousel.Caption>
            <h1>Volunteering</h1>
            <LinkContainer variant={"dark"} to={"/Volunteering"}>
              <Button>Volunteer Here</Button>
            </LinkContainer>
            <p>Come Volunteer with Us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="centering">
          <img className="d-block w-100"
            src="https://media.4-paws.org/6/3/1/f/631f8b7e6e4772c6350b660a9b871be32b51212f/VIER%20PFOTEN_2016-09-18_081-1927x1333-1920x1328.webp"
            alt="Third slide" id="carousel" />
          <Carousel.Caption>
            <h1>Help Us Save Animals</h1>
            <LinkContainer variant={"dark"} to={"/Donate"}>
              <Button>Donate</Button>
            </LinkContainer>
            <p>Donate to Our Non-Profit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer /></div>);
}

function AboutPage() {
  const imgProps = { xs: 12, sm: 4, lg: 4 };
  const colProps = { xs: 12, sm: 8, lg: 8 };
  return (<div>
    <div id="full">
      <Container className="p-4">
        <Row>
          <Col className="pt-4" {...colProps}>
            <h1 className="font-weight-bold">ABOUT US</h1>
            <p>We are the Pet Adoption Agency (PDA). We are an all volunteer, no-kill shelter.</p>
            <p>We have recently begun in 2022 and hope to continue our services to provide homes for animals for the foreseeable future.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis venenatis massa, a dignissim quam. Nunc nec velit vitae felis facilisis tincidunt. Curabitur sapien urna, cursus eget feugiat vitae, aliquam at libero. Vestibulum eget libero tempus, interdum est ac, elementum sapien. Nam ac elit nisl. Integer interdum lacus a accumsan pulvinar. Sed sed congue lorem, non porttitor sapien. Cras mi tortor, facilisis nec condimentum eget, accumsan vel lacus. Suspendisse a dignissim metus.

              Cras congue consequat consequat. Maecenas varius sagittis est non aliquet. Donec ac tincidunt mauris. Aenean posuere dolor quis leo congue, eget porttitor neque lacinia. Phasellus bibendum accumsan nisl, eu pretium dui lobortis ut. Vivamus maximus vel justo nec efficitur. Proin lacus ipsum, ultricies imperdiet est vitae, tincidunt fermentum ipsum. Nullam quis dictum augue.</p>

          </Col>
          <Col {...imgProps}>
            <img src="https://etobicokehumanesociety.com/wp-content/uploads/2020/08/cat-adoption-volunteer.jpg" className="rounded m-4" id="aboutIMG" alt="cat volunteer" />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col className="pt-4 pr-3" {...imgProps}>
            <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/transport-dog-458193.jpg?h=1fd6adb6&itok=UMDoZwpR" className="rounded" id="aboutIMG" alt="dog volunteer" />
          </Col>
          <Col className="p-4 text-center" {...colProps}>
            <h1>What We Do</h1>
            <p>Some other text to fill this out</p>
            <p>We give dogs and cats new forever homes.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis venenatis massa, a dignissim quam.</p>
            <p>Nunc nec velit vitae felis facilisis tincidunt. Curabitur sapien urna, cursus eget feugiat vitae.</p>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </div>);
}

function Adoption() {
  const colProps = { xs: 12, sm: 8, lg: 8 };
  return (
    <div>
      <div id="full">
        <Container {...colProps}>
          <Row>
            <Col>
              <Card border="light" className="pb-3 text-center font-weight-bold">
                <Card.Body>
                  <Card.Img src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1-632x329.jpg" className="card-image-top opacity-75" alt="dog card" />
                  <Card.ImgOverlay>
                    <div className="p-4">
                      <Card.Title>Adopt a Dog</Card.Title>
                      <Card.Subtitle className="mb2 text-dark">Save a dog today!</Card.Subtitle>
                      <Card.Text className="font-weight-bold">
                        Our team can help you choose a new puppy to add to your family!
                      </Card.Text>
                      <LinkContainer variant={"dark"} to={"/AdoptDog"}>
                        <Button>View Adoptable Dogs in your Area</Button>
                      </LinkContainer>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="light" className="pb-3 text-center font-weight-bold">
                <Card.Body>
                  <Card.Img src="https://1p4i0o1dbec324p53d2nzmy4-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/Black-cat-with-yellow-eyes-37645053_xl-2015.jpg" className="card-image-top opacity-75" alt="title card" />
                  <Card.ImgOverlay>
                    <div className="p-4">
                      <Card.Title>Adopt a Cat</Card.Title>
                      <Card.Subtitle className="mb2 text-dark">Save a cat today!</Card.Subtitle>
                      <Card.Text className="font-weight-bold color">
                        Our team can help you choose a new kitty to add to your family!
                      </Card.Text>
                      <LinkContainer variant={"dark"} to={"/AdoptCat"}>
                        <Button>View Adoptable Cats in your Area</Button>
                      </LinkContainer>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/pass/Brewer-CompanionDogApplication.jpg" className="rounded" id="aboutIMG" alt="dog volunteer" />
            </Col>
            <Col>
              <h1>Find the new addition to your family today!</h1>
              <p>Whether it be a playful dog to keep you and the kids engaged or a laidback cat to keep you company, our team can help you pick out the right addition to your family. </p>
            </Col>
            <Col>
              <img src="https://www.purina.co.nz/sites/default/files/2020-11/Adopting%20a%20Cat%20or%20KittenTEASER.jpeg" className="rounded" id="aboutIMG" alt="dog volunteer" />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  )
}

function Volunteering() {
  return (
    <div>
      <Row>
        <Col>
          <Card border="light" className="pb-3 text-center font-weight-bold">
            <Card.Body>
              <Card.Img src="https://image.petmd.com/files/styles/article_image/public/going-for-a-walk-picture-id917875026.jpg?VersionId=rdErLIPG7UUCmSGlnzeOPvt57lpv.4O1&itok=XWHuBWFR" className="card-image-top opacity-50" alt="walking dog" id="volunteerIMG" />
              <Card.ImgOverlay>
                <div className="p-4">
                  <Card.Title>Dog Volunteers</Card.Title>
                  <Card.Subtitle className="mb2 text-dark">Join our team in taking care of abandoned dogs around the GTA.</Card.Subtitle> <br />
                  <Card.Text className="font-weight-bold">
                    Our agency has a dedicated group of volunteers who love dogs and <br /> strive in helping them make their transition to their forever homes. <br /> <br /> <br />
                    We are actively taking in any dog lovers including students to join us on <br /> our mission to nurturing and caring for these dogs before <br />  they find their new families.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" className="pb-3 text-center font-weight-bold">
            <Card.Body>
              <Card.Img src="https://img.huffingtonpost.com/asset/5e6a9d34230000f5210c5e65.jpeg?ops=scalefit_720_noupscale" className="card-image-top opacity-50" alt="dog card" id="volunteerIMG" />
              <Card.ImgOverlay>
                <div className="p-4">
                  <Card.Title>Office Volunteers</Card.Title>
                  <Card.Subtitle className="mb2 text-dark">Join our administration team.</Card.Subtitle> <br />
                  <Card.Text className="font-weight-bold">
                    Our office works day and night with clients looking for more information <br /> on how the adoption process works and filling out the required forms. <br /> <br /> <br />
                    Volunteers experienced with administrative tasks such as organizing forms and communicating with clients on the phone can look to help around our office team.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" className="pb-3 text-center font-weight-bold">
            <Card.Body>
              <Card.Img src="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles-20/112420_Cat-products_Lead1.jpg?t=1606160685&width=1080" className="card-image-top opacity-50" alt="dog card" id="volunteerIMG" />
              <Card.ImgOverlay>
                <div className="p-4">
                  <Card.Title>Cat Volunteers</Card.Title>
                  <Card.Subtitle className="mb2 text-dark">Join our team in taking care of stray cats around the GTA.</Card.Subtitle> <br />
                  <Card.Text className="font-weight-bold">
                    Cat-loving individuals can help our care team for nurturing our cats and baby kittens before transitioning to their new homes. <br /><br /><br />
                    If you want to volunteer to help take care of our adorable cats before they find their loving families, please apply today.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div class="registration">
          <Card border="light" className="pb-3 text-center font-weight-bold">
            <Card.Body>
              <div className="p-4">
                <Card.Title>Volunteer Today!</Card.Title>
                <Card.Subtitle className="mb2 text-dark">If you have any questions or are interested please contact us down below:</Card.Subtitle>
                <Card.Text className="font-weight-bold">
                  By Phone: 416 555 5555 <br />
                  By Email: AdoptionAgency@gmail.com
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Footer />
    </div>
  )
}

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChange(e) {
    let inputName = e.target.name;
    let inputVal = e.target.value;

    this.setState({ [inputName]: inputVal });
  }

  onSubmitHandler(event) {

    if (this.state.firstName === "") {
      alert("Please enter your first name.")
      event.preventDefault();
    } else if (this.state.lastName === "") {
      alert("Please enter your last name.")
      event.preventDefault();
    } else if (this.state.email === "") {
      alert("Please enter your email.")
      event.preventDefault();
    } else {
      alert("Successfully registered!")
    }
  }

  render() {
    return (
      <div class="registration">
        <Card>
          <Card.Img src="https://dogtime.com/assets/uploads/gallery/dogs-in-the-office-for-take-your-dog-to-work-day/office-dog-9.jpg" className="card-image-top" alt="registration" />
          <Card.Title>Register Your Account Down Below</Card.Title>
          <Card.Subtitle className="mb2 text-dark">Fill in the details here:</Card.Subtitle> 
          <Card.Text> <br />

            <form id="register" onSubmit={this.onSubmitHandler}>
              <input type="text" name="firstName" placeholder='First Name...' onChange={this.onChange} /> <br /> <br /> 
              <input type="text" name="lastName" placeholder='Last Name...' onChange={this.onChange} /> <br /> <br /> 
              <input type="text" name="email" placeholder='Email...' onChange={this.onChange} /> <br /> <br /> 
              <button>Register</button>
            </form>
          </Card.Text>
        </Card>
        <Footer />
      </div>
    )
  }
}

function Donation() {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    postal: "",
    amount: Number,
    credit: Number
  });
  const [formError, setformError] = useState({
    name: "*",
    address: "*",
    postal: "*",
    amount: "*",
    credit: "*"
  });
  const onChangeHandler = (event) => {
    var newValue = event.target.value;
    var targetName = event.target.name;
    if (targetName === "credit") {
      if (newValue.length < 1) {
        setformError({ ...formError, [targetName]: "*" });
      } else if (isNaN(+newValue)) {
        setformError({
          ...formError,
          [targetName]: "Please enter a number."
        });
      } else {
        setformError({ ...formError, [targetName]: "" });
      }
      setFormValues({ ...formValues, [targetName]: newValue });
    } else if (targetName === "amount") {
      if (newValue.length < 1) {
        setformError({ ...formError, [targetName]: "*" });
      } else if (isNaN(+newValue)) {
        setformError({
          ...formError,
          [targetName]: "Please enter a number."
        });
      } else {
        setformError({ ...formError, [targetName]: "" });
      }
      setFormValues({ ...formValues, [targetName]: newValue });
    } else {
      if (newValue.length < 1) {
        setformError({ ...formError, [targetName]: "*" });
      } else {
        setformError({ ...formError, [targetName]: "" });
      }
    }
    setFormValues({ ...formValues, [targetName]: newValue });
  };
  const onSubmitHandler = (event) => {
    if (
      formError.name.length > 0 ||
      formError.address.length > 0 ||
      formError.postal.length > 0 ||
      formError.credit.length > 0 ||
      formError.postal.length > 0
    ) {
      alert("Please fill out required fields");
      event.preventDefault();
    } else if (!document.getElementById("check").checked) {
      alert("You need to confirm terms and conditions!");
      event.preventDefault();
    } else {
      alert(
        "Thank you " +
        formValues.name +
        " for your donation of $" + formValues.amount + ". A tax receipt will be mailed to " +
        formValues.address
      );
    }
  };
  return (
    <div class="registration">
      <Card>
        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mn07ojMhyKdE4vBXA0btiHkhvqxpxwKb15Ic_MPT0IT0pz8ZDZLe1IbTCDpiRP89LLc&usqp=CAU" className="card-image-top" alt="registration" />
        <Card.Title>Register Your Account Down Below</Card.Title>
        <Card.Subtitle className="mb2 text-dark">Fill in the details here:</Card.Subtitle>
        <Card.Text>

          <form onSubmit={onSubmitHandler}>
            <section>
              <label>Enter your name: </label>
              <input
                name={"name"}
                onChange={onChangeHandler}
                value={formValues.name}
              />
              <label> {formError.name}</label>
            </section>
            <br />
            <section>
              <label>Enter your address: </label>
              <input
                name={"address"}
                onChange={onChangeHandler}
                value={formValues.address}
              />
              <label> {formError.name}</label>
            </section>
            <br />
            <section>
              <label>Enter your Postal Code : </label>
              <input
                name={"postal"}
                onChange={onChangeHandler}
                value={formValues.postal}
              />
              <label> {formError.name}</label>
            </section>
            <br />
            <section>
              <label>Enter Donation amount : </label>
              <input
                name={"amount"}
                onChange={onChangeHandler}
                value={formValues.amount}
              />
              <label> {formError.amount} </label>
            </section>
            <br />
            <section>
              <label>Enter your credit card number: </label>
              <input
                name={"credit"}
                onChange={onChangeHandler}
                value={formValues.credit}
              />
              <label> {formError.credit}</label>
            </section>
            <br />
            <section>
              <input type="checkbox" onChange={onChangeHandler} id="check" />
              <label>I agree to the Terms and Conditions</label>
            </section>
            <br />

            <button>Submit</button>
          </form>
        </Card.Text>
      </Card>

      <Footer />

    </div>
  );
}

// -------------------------------------CAT ADOPTION COMPONENTS-------------------------------------

function CatSearchForm() {
  const [zipCode, setZipCode] = useState("");
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <div>
      <Card border="light" className="pb-3 text-center font-weight-bold" id="mer">
        <Card.Body>
          <Card.Img src="https://www.sheknows.com/wp-content/uploads/2018/08/x7twxaqwqz3olffyox1c.jpeg" className="card-image-top opacity-50" alt="adopting cats" />
          <Card.ImgOverlay>
            <Card.Title>Cats in your area:</Card.Title>
            <Card.Subtitle className="mb2 text-dark">Please input area code (EX: L6B):</Card.Subtitle>
            <Card.Text className="font-weight-bold">
              <form>
                <input
                  onChange={onChangeHandler}
                  name="zip"
                  type="text"
                  zip="postalCode"
                />
                <button
                  onClick={() => {
                    navigate("/cat/" + zipCode);
                  }}
                >
                  Find cats in my area
                </button>
              </form>
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </div>
  );
}

function GetCatZip(props) {
  let { zipcode } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    var url = "https://api.zippopotam.us/ca/" + zipcode;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  if (data === undefined) {
    return <div>Please wait...</div>;
  }
  if (data.places === undefined) {
    return (
      <div>
        No match
        <LinkContainer variant={"dark"} to={"/AdoptCat"}>
          <Button>Go Back</Button>
        </LinkContainer>
      </div>
    );
  }
  return (
    <>
      <img src="https://cataas.com/cat/cute" class="dog-center" />
      {data.places.map((item) => {
        return (
          <div class="dog-props">
            <div>Location Name: {item["place name"]}</div>
            <div>Province: {item.state}</div>
            <div>Area Code: {zipcode}</div>
          </div>
        );
      })}
      <CatButtons />
    </>
  );
}

function CatButtons() {
  return (
    <div class="dog-buttons">
      <LinkContainer variant={"dark"} to={"/AdoptCat"}>
        <Button>Go Back</Button>
      </LinkContainer>
      <button class="btn btn-dark" onClick={Refresh}>New Cat</button>
      <button class="btn btn-dark" onClick={Adopted}>Adopt Cat</button>
    </div>
  );
}

// -------------------------------------DOG ADOPTION COMPONENTS-------------------------------------

function DogSearchForm() {
  const [zipCode, setZipCode] = useState("");
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <div>
      <Card border="light" className="pb-3 text-center font-weight-bold" id="mer">
        <Card.Body>
          <Card.Img src="https://www.rescuedogs101.com/wp-content/uploads/2019/07/How-Long-Does-Take-Adopt-Dog_2853_RescueDogs101.jpg" className="card-image-top opacity-50" alt="adopting dogs" />
          <Card.ImgOverlay>
            <Card.Title>Dogs in your area:</Card.Title>
            <Card.Subtitle className="mb2 text-dark">Please input area code (EX: L6B):</Card.Subtitle>
            <Card.Text className="font-weight-bold">
              <form>
                <input
                  onChange={onChangeHandler}
                  name="zip"
                  type="text"
                  zip="postalCode"
                />
                <button
                  onClick={() => {
                    navigate("/dog/" + zipCode);
                  }}
                >
                  Find dogs in my area
                </button>
              </form>
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>

    </div>
  );
}

class DogRetrieve extends Component {
  constructor() {
    super();
    this.state = { message: [] };
  }
  componentDidMount() {
    var url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ message: json.message });
      });
  }
  render() {
    return (<div>
      <Dog
        breed={this.state.message}
      />

    </div>)
  }
}

function Dog(props) {
  return <div>
    <img src={props.breed} class="dog-center" />
  </div>

}

function Refresh() {
  window.location.reload(false);
}

function Adopted() {
  alert("Thank you for adopting! An email will be sent to you for more information.")
}

function DogButtons() {
  return (
    <div class="dog-buttons">
      <LinkContainer variant={"dark"} to={"/AdoptDog"}>
        <Button>Go Back</Button>
      </LinkContainer>
      <button class="btn btn-dark" onClick={Refresh}>New Dog</button>
      <button class="btn btn-dark" onClick={Adopted}>Adopt Dog</button>
    </div>
  );
}

function GetDogZip(props) {
  let { zipcode } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    var url = "https://api.zippopotam.us/ca/" + zipcode;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  if (data === undefined) {
    return <div>Please wait...</div>;
  }
  if (data.places === undefined) {
    return (
      <div>
        No match
        <LinkContainer variant={"dark"} to={"/AdoptDog"}>
          <Button>Go Back</Button>
        </LinkContainer>
      </div>
    );
  }
  return (
    <>
      <DogRetrieve />
      {data.places.map((item) => {
        return (
          <div class="dog-props">
            <div>Location Name: {item["place name"]}</div>
            <div>Province: {item.state}</div>
            <div>Area Code: {zipcode}</div>
          </div>
        );
      })}
      <DogButtons />
    </>
  );
}

export default App;

