import { Component } from '@angular/core';

@Component({
    selector: 'tickets-terms',
    template: `
  <div class="page">
    <div class="section" id="tickets-terms">
      Tickets
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 conduct">
        <div>
          <p>Read carefully before registering for the event</p>
          <h3>Tickets Types</h3>
          <p>There are two different types of tickets:</p>
          <ul>
            <li>Conference tickets</li>
            <li>Accommodation package tickets: shared or individual use.</li>
          </ul>

          <h3>Conference Tickets</h3>
          <p>This ticket gives you full access to ngcruise 2017 conference. Note this ticket doesn't cover for accommodation. You must book an Accommodation package separately.</p>

          <h4>Tickets Schedule</h4>
          <ul>
            <li>Early bird ticket: <strong>$550 + 5% tito + 3% credit card</strong>. Only 50 tickets available until 1st of January.</li>
            <li>Regular ticket: <strong>$650 + 5% tito + 3% credit card</strong>. Until 1st of May.</li>
            <li>Late bird ticket: <strong>$750 + 5% tito + 3% credit card</strong>. After 1st of May.</li>
          </ul>

          <h3>Booking Changes</h3>
          <p>Cruise accommodations cannot be changed</p>
          <p>Name changes are fine to do before 1st of February, 2017.</p>

          <h3>Accommodation Tickets</h3>
          <p>This includes an accommodation package (room type) plus <strong>gratuities $54</strong> and pre-purchase <strong>WiFi $60</strong>. This ticket does not give you access to the conference.</p>

          <h4>Room Types</h4>
            <div class="carousel slide" data-ride="carousel" id="myCarousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#myCarousel">
                </li>
                <li data-slide-to="1" data-target="#myCarousel"></li>
                </ol><!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="room" alt="Oceanview Stateroom" src=
                    "/assets/img/rooms/vis-oceanview-2.jpg">
                    <div class="carousel-caption">
                    <h3>Large Oceanview Stateroom</h3>
                    <p class="hidden-xs">These larger staterooms offer a gorgeous view, two twin beds and a private bathroom.</p>
                    </div>
                </div>
                <div class="item">
                    <img class="room" alt="Interior Stateroom" src=
                    "/assets/img/rooms/vis-interior-2.jpg">
                    <div class="carousel-caption">
                    <h3>Interior Stateroom</h3>
                    <p class="hidden-xs">This standard stateroom offers two twin beds, a private bath and all the amenities of our standard staterooms.</p>
                    </div>
                </div>
                </div>
                <!-- Left and right controls -->
                <a class="left carousel-control" data-slide="prev" href=
                "#myCarousel" role="button"><span aria-hidden="true" class=
                "glyphicon glyphicon-chevron-left"></span> <span class=
                "sr-only">Previous</span></a> <a class="right carousel-control"
                data-slide="next" href="#myCarousel" role=
                "button"><span aria-hidden="true" class=
                "glyphicon glyphicon-chevron-right"></span> <span class=
                "sr-only">Next</span></a>
            </div>
          <p>Room Types</p>
          <ul>
            <li><strong>Large Oceanview Stateroom</strong> These larger staterooms offer a gorgeous view, two twin beds and a private bathroom. Two twin beds (can convert into queen-size), sitting area with sofa, vanity area and a private bathroom. Please note: Staterooms 3000-3014, 3500-3514, 2010-2014, & 2510-2514 have two portholes instead of a window. Approximate size 151.8 sq. ft.</li>
            <li><strong>Interior Stateroom</strong> This standard stateroom offers two twin beds, a private bath and all the amenities of our standard staterooms. Two twin beds (can convert into queen-size), vanity area, and a private bathroom. Approximate size 132.4 sq. ft.</li>
          </ul>

          <h4>Accomodation Options</h4>
          <ul>
            <li><strong>Shared</strong>. Max 2 persons per cabin. You need to fill in the Full Name of a person to be matched with or state your preferences during registration. For 3 and 4 occupancy contact <a href="mailto:ngcruise@travelwithterra">ngcruise@travelwithterra.com</a> within 7 days of booking.</li>
            <li><strong>Individual use</strong>. You also have the option to have the room without pairing.</li>
          </ul>

          <h3>Shore Excursions</h3>
          <p>We have picked few excursions that you can book separately to experience each destination in a whole new way.</p>

          <h4>Our Selection</h4>
          <ul>
            <li><strong>Walking Adventure (Nassau, Day 2)</strong>. <strong>Duration</strong>: 2h 30min. <br/><br/>Enjoy a panoramic drive through the bustling heart of Nassau.  Your journey begins with a drive into town via the shopping district of Bay Street, past the Native Market en route to Fort Charlotte.  Built in 1787 to protect the harbour from pirates, the fort was a bastion of law and order in this colonial frontier of the "New World".  From the ramparts is a breathtaking panorama.<br/>

            You will also travel over the Paradise Island Bridge, which takes you to the world famous Paradise Island where you will drive past the the beautiful Cloister Gardens.  En route back to your ship in Nassau you will take a journey through the outskirts of the city, where you can see the colorful residential areas.<br/><br/></li>

            <li><strong>Snorkeling Experience (CocoCay, Day 3)</strong>. <strong>Duration</strong>: 2h 30min. <br/><br/>Get ready for a fun-filled snorkeling and relaxing getaway. Your guided hour-long snorkeling tour takes you by boat to a beautiful coral reef system close to Coco Cay. Your professional snorkel instructors will provide snorkel gear and instruction. <br/>

            Once you’re in the turquoise water, you’ll see plenty of fish and some beautiful coral reefs. Watch as schools of snappers, flounder, parrotfish, and mackerel swim around you and the coral reef system. Afterwards, go for swim in the shallow waters near the sandbar, or relax on a floating chair with a refreshing tropical drink.<br/><br/></li>

            <li><strong>Food Extravaganza (Key West, Day 4)</strong>. <strong>Duration</strong>: 2h. <br/><br/>Enjoy a tasting adventure along Key West’s palm-lined streets sampling a variety of local favorites at three eateries. You’ll walk to the Smokin’Tuna Saloon, a Key West style compound canopied with banyan and ficus trees. Savor a sampling of housemade shrimp ceviche, smoked tuna fish dip and golden fried conch fritters. <br/>

            Next, spice up your life with a visit to Pepper's of Key West, considered by many to be the best hot sauce store in the world for a tasting menu of dips and salsas. Cool down your palate with a stop at Kermit's Key Lime Shoppe for a slice of his classic pie or his signature frozen key lime pie dipped in Belgian chocolate, acclaimed the best by Food Network, National Geographic, Paula Deen and others. Maybe Kermit will share his recipe before you follow your guide back to the pier.</li>
          </ul>

          <h4>Excursion Prices</h4>
          <ul>
            <li>Nassau Walking Adventure: <strong>$35 + 5% tito + 3% credit card</strong>.</li>
            <li>CocoCay Snorkeling Experience: <strong>$55 + 5% tito + 3% credit card</strong>.</li>
            <li>Key West Food Extravaganza: <strong>$45 + 5% tito + 3% credit card</strong>.</li>
          </ul>
          
          <div class="centerBlock">
            <button class="main-btn" onclick="window.open('https://ti.to/ngcruise/ngcruise17','_blank');return false;">Buy</button>
          </div>
          <div class="centerBlock">
            <h3><a href="#/faq#faq">FAQ</a></h3>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
  `
})
export class TicketsTerms {

}
