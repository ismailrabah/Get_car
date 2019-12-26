import React, { Component } from "react";
 
import { Column,Hero,Container,Title,Input,Button,Field,Control,Image,Card,
        Media,Content,Menu,List,Icon,Tile,Divider,Footer } from "rbx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faArrowRight,faCheck, faCopyright ,faPaperPlane,faArrowDown,
        faGraduationCap,faCogs,faBookReader,faComments,faCarAlt ,faRoad ,faClipboardCheck,
        faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faYelp } from "@fortawesome/free-brands-svg-icons"

import logo from './static/logo192.png';
import Jumbotron from './static/Jumbotron.png';
import Business_insider from './static/business_insider_logo.png';
import Wired_logo from './static/wired_logo.png';
import Urban_x_logo from './static/urban_x_logo.png';
import Metropolice_logo from './static/metropolice_logo.png';
import Curbed_logo from './static/curbed_logo.png';
import About_us from './static/about_us.jpg';
import Sam from './static/sam.jpg';
import Service_zone from './static/service_zone.png';
import car1 from './static/car1.png';
import car2 from './static/car2.png';
import car3 from './static/car3.png';


class Home extends Component {
  render() {
    return (
        <div>
            {/* 00 _ Jumbotron */}
            <Container>
                <Column.Group className="jombotron">
                    <Column>
                        <Hero color="light">
                            <Hero.Body>
                                <Container>
                                    <Title as="h1" size="1">Just drive.<br/>We'll do the rest.</Title>
                                    <Title as="h5" subtitle>
                                        All-inclusive,usage-based car subscriptions.
                                    </Title>
                                    <Field kind="addons">
                                        <Control className="PhoneNumbre">
                                            <Input type="text" size="large" className="phone_input" placeholder="Phone number" />
                                        </Control>
                                        <Control>
                                            <Button rounded color="dark" size="large" className="GetStarted">Get stated</Button>
                                        </Control>
                                    </Field>
                                </Container>
                            </Hero.Body>
                        </Hero>
                    </Column>
                    <Column className="jomoImage">
                        <Image.Container size={100}>
                            <Image src={Jumbotron} />
                        </Image.Container>
                    </Column>
                </Column.Group>
            </Container>
            {/* 00 _ Partners */}
            <div className="C_partners">
                <Container>
                    <Column.Group className="partsLogo">
                        <Column>
                            <Image.Container size={100}>
                                <Image  src={Business_insider} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={100}>
                                <Image src={Wired_logo} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={100}>
                                <Image src={Urban_x_logo} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={100}>
                                <Image src={Metropolice_logo} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={100}>
                                <Image src={Curbed_logo} />
                            </Image.Container>
                        </Column>
                        <Column className="goDown"> 
                            <a href="#"><Icon>
                                <FontAwesomeIcon icon={faArrowDown} size="md" color="dark"/>
                            </Icon></a>
                        </Column>
                    </Column.Group>
                </Container>
            </div>
            {/* 01 _ About Us */}
            <div  className="C_about_us">
                <Container>
                    <Column.Group>
                        <Column size="half">
                            <Card>
                                <Card.Image>
                                    <Image.Container size="100">
                                        <Image src={About_us} />
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                    <Content>
                                        <p>"Since becoming a monthly subscriber.I feel like I have my car back again.
                                        It's like Iown a car without the worries or cost of keeping it around all the time."</p>
                                        <br />
                                        <Media className="opinion">
                                            <Media.Item as="figure" align="left">
                                                <Image.Container as="p" size={64}>
                                                    <Image rounded alt="64x64"src={Sam}/>
                                                </Image.Container>
                                            </Media.Item>
                                            <Media.Item>
                                                <Title as="p" size={4}> SAM R.</Title>
                                                <Title as="a" subtitle size={6}>@sam_r</Title>
                                            </Media.Item>
                                            <Media.Item>
                                                <div className="starts_icon">
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faStar} size="xs"/>
                                                    </Icon>
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faStar} size="xs"/>
                                                    </Icon>
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faStar} size="xs"/>
                                                    </Icon>
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faStar} size="xs"/>
                                                    </Icon>
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faStar} size="xs"/>
                                                    </Icon>
                                                    <p dateTime="2016-1-1">28 reviews at Yelp</p>
                                                </div>
                                            </Media.Item>
                                        </Media>
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column>
                            <Card className="card_about">
                                <Card.Content>
                                    <Title subtitle as="p" size={6}>01 <span>_________</span> ABOUT US</Title>
                                    <Title>
                                    Let's make cities better
                                    </Title>
                                    <Content>
                                        Upshift is like having your own car at your doorstep,but only the days you want it. Monthly plans based on kow much you drive that include parking,insurance,maintenance and more.
                                        <br/>
                                        <br/>
                                        We believe in using business to drive positive change in the world and never for what worked in the past.
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                        <Media>
                                            <Media.Item as="figure">
                                            <Button rounded color="dark" >
                                                <Icon>
                                                    <FontAwesomeIcon icon={faGraduationCap} size="1g"/>
                                                </Icon>
                                            </Button>
                                            </Media.Item>
                                            <Media.Item>
                                                <Title subtitle as="p" size={4}>
                                                    Interested in our values?
                                                </Title>
                                                <Title as="p" subtitle size={6}>
                                                    <a href="#"><strong>Learn more about the company 
                                                        <Icon>
                                                            <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                        </Icon>
                                                    </strong></a>
                                                </Title>
                                            </Media.Item>
                                        </Media>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </div>
            {/* 02 _ How it works */}
            <div  className="C_how_works">
                <Container>
                    <Column.Group>
                        {/* Title */}
                        <Column size={4} className="titlo">
                            <Title subtitle as="p" size={6}>02 <span>_________</span> HOW IT WORKS</Title>
                            <Title as="h1">
                                Simple and handy rental process
                            </Title>
                        </Column>
                        {/* Accessories */}
                        <Column size={4}>
                            <Card>
                                <Card.Content>
                                    <Content>
                                        Snow chaine,surf board rack,key lock box,or dog car seat hammock available upon request.
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Button rounded color="dark" >
                                                <Icon>
                                                    <FontAwesomeIcon icon={faCogs} size="1g"/>
                                                </Icon>
                                            </Button>
                                        </Media.Item>
                                        <Media.Item>
                                            <Title as="p" subtitle size={6}>
                                                <a href="#">
                                                    <strong> check the available accessories</strong>
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                    </Icon>
                                                </a>
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                        {/* Help(AFQ) */}
                        <Column size={4}>
                            <Card>
                                <Card.Content>
                                    <Content>
                                        Still got questions?We've probably covered them all in the Help Center.
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Button rounded color="dark" >
                                                <Icon>
                                                    <FontAwesomeIcon icon={faBookReader} size="1g"/>
                                                </Icon>
                                            </Button>
                                        </Media.Item>
                                        <Media.Item>
                                            <Title as="p" subtitle size={6}>
                                                <a href="#"><strong>Read our FAQ
                                                    <Icon>
                                                        <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                    </Icon>
                                                </strong></a>
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
                {/* 02 _ Steps */}
                <Container className="C_steps">
                    <Column.Group vcentered multiline>
                        <Column size="one-quarter">
                            <Card>
                                <Card.Header>
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Icon>
                                                <FontAwesomeIcon icon={faComments} size="2x"/>
                                            </Icon>
                                        </Media.Item>
                                    </Media>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Title as="h4" > Text us</Title>
                                    <Content>
                                        Text when you want your car.
                                        <br/>
                                        No app needed,just an online account.Real human operators.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column size="one-quarter">
                            <Card>
                                <Card.Header>
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Icon>
                                                <FontAwesomeIcon icon={faCarAlt} size="2x"/>
                                            </Icon>
                                        </Media.Item>
                                    </Media>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Title  as="h4" >We deliver</Title>
                                    <Content>Your car will arrive at your door - clean and fully fueled.</Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column size="one-quarter">
                            <Card>
                                <Card.Header>
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Icon>
                                                <FontAwesomeIcon icon={faRoad} size="2x"/>
                                            </Icon>
                                        </Media.Item>
                                    </Media>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Title as="h4">You drive</Title>
                                    <Content>
                                        Hop in and go with full coverage insurance, FasTark, phone <br/>accessories,and unlimited mileage.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column size="one-quarter">
                            <Card>
                                <Card.Header>
                                    <Media>
                                        <Media.Item as="figure" align="left">
                                            <Icon>
                                                <FontAwesomeIcon icon={faClipboardCheck} size="2x"/>
                                            </Icon>
                                        </Media.Item>
                                    </Media>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Title  as="h4">We pick it up</Title>
                                    <Content>
                                        It's yours for a few hours or a few days
                                        <br/>
                                        Return on your own time,anywhere in our zone. We'll gas and clean it.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </div>
            {/* 03 _ Service zone */}
            <Container className="C_Service_zone">
                <Column.Group>
                    <Column size="half">
                        <Image.Container className="Service_zone_img" size={100}>
                            <Image src={Service_zone} />
                        </Image.Container>
                    </Column>
                    <Column className="Service_zone_card">
                        <Card>
                            <Card.Content >
                                <Title subtitle as="p" size={6}>03 <span>_________</span> SERVICE ZONE</Title>
                                <Title as="h1">We've got SF covered</Title>
                                <Content>
                                    <p>We provice two delivery options for any trip:</p>
                                    <div className="inner">
                                        <h5>
                                            <Icon>
                                                <FontAwesomeIcon icon={faCheck} size="md"/>
                                            </Icon>
                                            Concierge service (8am-8pm daily)
                                        </h5>
                                        <p
                                        >We deliver or pick up at your doorstep.Always<br/> have a parking spot right out front,just for you.
                                        </p>
                                        <h5>
                                            <Icon>
                                                <FontAwesomeIcon icon={faCheck} size="md"/>
                                            </Icon>
                                            Self service(24/7)
                                        </h5>
                                        <p>
                                            We deliver within 3 blocks and unlock it whenever your are ready, Park anywhere legal in our zone,
                                            lock up, and walk away to return, More flexibility on timing, especially for starting early or ending late.
                                        </p>
                                    </div>
                                    
                                </Content>
                            </Card.Content>
                            <Card.Footer as="footer">
                                <Card.Footer.Item as="p">
                                <Media>
                                <Media.Item as="figure" align="left">
                                    <Button rounded color="dark" className="ChalkboardTeacher" >
                                        <Icon>
                                            <FontAwesomeIcon icon={faChalkboardTeacher} size="1g"/>
                                        </Icon>
                                    </Button>
                                </Media.Item>
                                <Media.Item>
                                    <Title subtitle as="p" >
                                        Outside of SF?
                                    </Title>
                                    <Title as="p" subtitle >
                                        <a href="#">Tell us where ro expand
                                            <Icon>
                                                <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                            </Icon>
                                        </a>
                                    </Title>
                                </Media.Item>
                                </Media>
                                </Card.Footer.Item>
                            </Card.Footer>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
            {/* 04 _ Pricing */}
            <div className="C_pricing">
                <Container>
                    <Column.Group>
                        <Column size="full">
                            <Card className="pricing_info">
                                <Card.Header>
                                    <Content textAlign="centered">
                                        <Title subtitle as="p" size={6}>04 <span>_________</span> PRICING</Title>
                                        <Title as="h2" textAlign="centered">
                                            Monthly plans for less the a parking space.
                                        </Title>
                                    </Content>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Content as="p">
                                        Plans include concierge delivery and pickup, cleaning and refueling service, full coverage insurance
                                        <br/>
                                        and maintenance- everything but gas and tolls, Join instantly with $0 down and get your car right now.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
                {/* Pricing choices */}
                <Container className="C_pricing_choces">
                    <Column.Group>
                        {/* FlexPass */}
                        <Column size={3} offset={1}>
                            <Card>
                                <Card.Header textAlign="centered">
                                    <Content>
                                        <Title size="3">FlexPass</Title>
                                        <Title subtitle size="6">Get 2 days/month</Title>
                                        <Title size="2" as="span"><b>$159</b></Title><small>/month</small>
                                    </Content>
                                </Card.Header>
                                <Card.Content>
                                    <Content textAlign="centered">
                                        <p>
                                            Not sure how much you drive?
                                            Get a magic button anytime you need a car.
                                        </p>
                                        <Button.Group>
                                            <Button size="medium" rounded color="dark">Start with FlexPass</Button>
                                        </Button.Group>
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item>
                                        <Title as="p" subtitle size={6}>
                                            <a href="#"><strong> View plan details 
                                                <Icon>
                                                    <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                </Icon>
                                            </strong></a>
                                        </Title>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                        {/* Getaway */}
                        <Column size={3}>
                            <Card className="getaway">
                                <Card.Header>
                                    <Content>
                                        <Title className="recommended" subtitle size="6">RECOMMENDED</Title>
                                        <Title size="3">Getaway</Title>
                                        <Title subtitle size="6">Get 4 days/month</Title>
                                        <Title size="2" as="span"><b>$219</b></Title>/month
                                    </Content>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Content>
                                        <p>
                                            Get away up to once a week. your car is delivered and disppears-like magic.
                                        </p>
                                        <Button.Group>
                                            <Button size="medium" rounded color="dark">Start with Getaway</Button>
                                        </Button.Group>
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item>
                                        <Title as="p" subtitle size={6}>
                                            <a href="#"><strong> View plan details 
                                                <Icon>
                                                    <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                </Icon>
                                            </strong></a>
                                        </Title>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                        {/* Freedom */}
                        <Column size={3}>
                            <Card>
                                <Card.Header>
                                    <Content>
                                        <Title size="3">Freedom</Title>
                                        <Title subtitle size="6">Get 8 days/month</Title>
                                        <Title size="2" as="span"><b>$389</b></Title>/month
                                    </Content>
                                </Card.Header>
                                <Card.Content textAlign="centered">
                                    <Content>
                                        <p>
                                            Get a car up to twice a week. It's freedom whenever you want it (and no additional fees when you don't).
                                        </p>
                                        <Button.Group>
                                            <Button size="medium" rounded color="dark">Start with Freedom</Button>
                                        </Button.Group>
                                    </Content>
                                </Card.Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item>
                                        <Title as="p" subtitle size={6}>
                                            <a href="#"><strong> View plan details 
                                                <Icon>
                                                    <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                                                </Icon>
                                            </strong></a>
                                        </Title>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </div>
            {/* 05 _ The car */}
            <Container className="C_car">
                <Column.Group>
                    <Column size="7">
                        <Card>
                            <Card.Content textAlign="centered">
                                <Title subtitle as="p" size={6}>05 <span>_________</span> THE CAR</Title>
                                <Title>Always Drive an Identical Prius</Title>
                                <Content>
                                    <p>
                                        All our cars are the same so they feel familiar.
                                        No branding so you don't stick out.
                                    </p>
                                    <br/>
                                    <p>
                                        Fits 5 comfortably - or a surfboard,bicycle,or skiis
                                        54MPG hybrid gets you to Thoe and back on a single tank. 
                                        Phone mount, charging cables, and FasTrak included,Bluetooth 
                                        and safety technologu like adaptice cruise control.
                                        We use all natural deodorizers and cleaning supplies.
                                    </p>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Column>
                    <Column size="5">
                        <Tile kind="ancestor">
                            <Tile className="car_1" vertical size={10}>
                                <Tile kind="parent">
                                    <Tile as="div" kind="child">
                                        <Image.Container size={100}>
                                            <Image src={car1} />
                                        </Image.Container>
                                    </Tile>
                                </Tile>
                            </Tile>
                        </Tile>
                        <Tile className="car_2_3" kind="ancestor">
                            <Tile kind="parent">
                                <Tile as="div" kind="child">
                                    <Image.Container size={100}>
                                        <Image src={car2} />
                                    </Image.Container>
                                </Tile>
                            </Tile>
                            <Tile kind="parent" size={7}>
                                <Tile as="div" kind="child">
                                    <Image.Container size={100}>
                                        <Image src={car3} />
                                    </Image.Container>
                                </Tile>
                            </Tile>
                        </Tile>
                    </Column>
                </Column.Group>
            </Container>
            {/* Join as */}
            <Container className="C_join_us">
                <Column.Group>
                    <Column size="half">
                        <Content>
                            <Title as="h1">
                                Join instantly with $0 down and get your car right now.
                            </Title>
                        </Content>
                    </Column>
                    <Column>
                        <Content textAlign="centered">
                            <Button.Group>
                                <Button size="large" rounded color="dark">Get started</Button>
                            </Button.Group>
                        </Content>
                    </Column>
                </Column.Group>
            </Container>
            <Container className="C_Footer">
                <Divider color="dark"></Divider>
                <Footer>
                    <Content>
                        <Column.Group>
                            <Column size="2">                            
                                <Menu>
                                    <Menu.Label>PRODUCT</Menu.Label>
                                    <List>
                                        <List.Item>Personal</List.Item>
                                        <List.Item>Business</List.Item>
                                        <List.Item>Pricing</List.Item>
                                        <List.Item>Log In</List.Item>
                                    </List>
                                </Menu>
                            </Column>
                            <Column size="2">
                                <Menu>
                                    <Menu.Label>COMPANY</Menu.Label>
                                    <List>
                                        <List.Item>About</List.Item>
                                        <List.Item>Blog</List.Item>
                                        <List.Item>Careers</List.Item>
                                        <List.Item>Contact Us</List.Item>
                                    </List>
                                </Menu>
                            </Column>
                            <Column size="2">
                                <Menu>
                                    <Menu.Label>HELP CENTER</Menu.Label>
                                    <List>
                                        <List.Item>FAQ</List.Item>
                                        <List.Item>Insurance</List.Item>
                                        <List.Item>Agreement</List.Item>
                                    </List>
                                </Menu>
                            </Column>
                            <Column size="6">
                                <Menu>
                                    <Menu.Label>STAY IN TOUCH</Menu.Label>
                                    <p className="stay_taxt">Join our mailing list to get updates, We respect your privacy.</p>
                                    <Field kind="addons">
                                        <Control>
                                            <Input rounded  size="large" type="text" placeholder="Email address ..." />
                                        </Control>
                                        <Control>
                                            <Button size="large" rounded color="dark">
                                                <Icon>
                                                    <FontAwesomeIcon icon={faPaperPlane} size="xs"/>
                                                </Icon>
                                            </Button>
                                        </Control>
                                    </Field>
                                </Menu>
                            </Column>
                        </Column.Group>
                        <Column.Group className="down_fot">
                            <Column size="2">
                                <img src={logo} alt="" role="presentation" width="112" height="50"/>
                            </Column>
                            <Column size="4">
                                <p>
                                    Copyright 
                                    <Icon>
                                        <FontAwesomeIcon icon={faCopyright} size="xs"/>
                                    </Icon>
                                    2019 Upshift,Inc
                                </p>
                            </Column>
                            <Column size="6">
                                <Button rounded color="dark">
                                    <Icon>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Icon>
                                </Button>
                                <Button rounded color="dark">
                                    <Icon>
                                        <FontAwesomeIcon icon={faTwitter} size="xs"/>
                                    </Icon>
                                </Button>
                                <Button rounded color="dark">
                                    <Icon>
                                        <FontAwesomeIcon icon={faYelp} size="xs"/>
                                    </Icon>
                                </Button>
                            </Column>
                        </Column.Group>
                    </Content>
                </Footer>
            </Container>
        </div>
    );
  }
}
export default Home;