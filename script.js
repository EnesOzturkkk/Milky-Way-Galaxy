const buttons = document.querySelectorAll('.planetButton'); 
 const planetImages = document.querySelectorAll('#right .planetImg'); 
 const planetContainer = document.getElementById('planet-container'); 
 const readMoreButton = document.querySelector('#top button'); 

 // Store the original full descriptions 
 const fullDescriptions = { 
    milkyway: "Discover our galaxy with @code.withenes !", 
    mercury: "Mercury is the smallest planet in our solar system and closest to the Sun. A year is shorter than a day: A single day on Mercury (the time it takes to rotate once) is 176 Earth days long. However, a year (the time it takes to orbit the Sun) is only 88 Earth days long. This means that if you lived on Mercury, you'd have two birthdays in a single day!", 
    venus: "Venus is the second planet from the Sun, named after the Roman goddess of love and beauty. The Hottest Planet: Venus is the hottest planet in our solar system, with a scorching average surface temperature of 462 ∘ C (863 ∘F). This is hotter than Mercury, and it's due to a runaway greenhouse effect caused by its thick, toxic atmosphere of carbon dioxide.", 
    earth: "The third planet from the Sun and the only astronomical object known to harbor life. The Only Known Life: Earth is the only planet in the universe that we know of that can sustain life. Its unique combination of liquid water, a stable atmosphere, and a moderate temperature range makes it a perfect cradle for life.", 
    mars: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. The Tallest Volcano: Mars is home to Olympus Mons, the largest volcano in the solar system. It's about three times the height of Mount Everest on Earth.", 
    jupiter: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. The Great Red Spot: Jupiter is famous for the Great Red Spot, a giant storm that is larger than Earth and has been raging for centuries.", 
    saturn: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. Less Dense Than Water: Saturn is a gas giant and is famous for its stunning rings, but an even more amazing fact is that it's the only planet in our solar system that is less dense than water. If you could find a bathtub large enough, Saturn would float!", 
    uranus: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Rotates on its Side: Uranus is unique in the solar system because it rotates on its side. Its axial tilt is about 98 degrees, which means it appears to roll around the Sun in its orbit, giving it very unusual seasons.", 
    neptune: "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet by diameter and the densest giant planet. Strongest Winds: Neptune has the fastest winds in the solar system, with speeds that can reach over 2,000 km/h (1,200 mph)." 
 }; 

 let chosenPlanet = "earth"; 

 function updatePlanetContainerPosition() { 
    const selectedImage = document.querySelector(`#right img[src*="${chosenPlanet}"]`); 
    if (!selectedImage) return; 

    const imageWidth = selectedImage.offsetWidth; 
    const gapWidth = 17 * 16; 
 
    const rightDivVisibleWidth = planetContainer.parentElement.offsetWidth; 

    const imagesArray = Array.from(planetImages); 
    const selectedIndex = imagesArray.findIndex(img => img.src.includes(chosenPlanet)); 

    let shift; 

    if (chosenPlanet === "mercury") { 
        shift = (rightDivVisibleWidth / 2) - (imageWidth / 2) - (selectedIndex * (imageWidth + gapWidth) + 120); 
    } else { 
        shift = (rightDivVisibleWidth / 2) - (imageWidth / 2) - (selectedIndex * (imageWidth + gapWidth)); 
    } 

    planetContainer.style.transform = `translateX(${shift}px)`; 
 } 

 function updateTopContent(planetName) { 
    const topH1 = document.querySelector('#top h1'); 
    const topP = document.querySelector('#top p'); 

    // Remove existing classes for animation 
    topH1.classList.remove('clarify-in'); 
    topP.classList.remove('clarify-in'); 
    readMoreButton.classList.remove('fade-in'); 

    // Remove all planet-specific background classes from the button 
const planetClasses = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']; 
    planetClasses.forEach(p => readMoreButton.classList.remove(`${p}-bg`)); 

    let newTitle = ""; 
    let newDescription = ""; 
    let fullDescription = ""; 

    if (planetName === "milkyway") { 
        newTitle = "Milky Way Galaxy"; 
        newDescription = "Discover our galaxy with @code.withenes !"; 
        fullDescription = newDescription; 
        readMoreButton.style.display = 'none'; 
    } else { 
        readMoreButton.style.display = 'block'; 
        newTitle = `${planetName.charAt(0).toUpperCase() + planetName.slice(1)}`; 
        fullDescription = fullDescriptions[planetName]; 
     
        const words = fullDescription.split(" "); 
        if (words.length > 30) { 
            newDescription = words.slice(0, 30).join(" ") + "..."; 
        } else { 
            newDescription = fullDescription; 
        } 
 
        // Add the new planet-specific background class 
        readMoreButton.classList.add(`${planetName}-bg`); 
    } 

    setTimeout(() => { 
        if (topH1) { 
            topH1.textContent = newTitle; 
            topH1.classList.add('clarify-in'); 
        } 
        if (topP) { 
            topP.textContent = newDescription; 
            topP.classList.add('clarify-in'); 
        } 
        if (planetName !== "milkyway") { 
            setTimeout(() => { 
                readMoreButton.classList.add('fade-in'); 
            }, 500); 
        } 
    }, 500); 
 } 

function toggleDescription() { 
    const topP = document.querySelector('#top p'); 
    const body = document.body; 

    const isFull = body.classList.contains('show-full-content'); 
 
    if (isFull) { 
        const currentDescription = fullDescriptions[chosenPlanet]; 
        const words = currentDescription.split(" "); 
        if (words.length > 30) { 
            topP.textContent = words.slice(0, 30).join(" ") + "..."; 
        } else { 
            topP.textContent = currentDescription; 
        } 
        readMoreButton.textContent = "Read More!"; 
        body.classList.remove('show-full-content'); 
    } else { 
        topP.textContent = fullDescriptions[chosenPlanet]; 
        readMoreButton.textContent = "Read Less"; 
        body.classList.add('show-full-content'); 
    } 
} 

function initializePage() { 
    buttons.forEach(btn => btn.classList.remove('right-aligned')); 
    planetImages.forEach(img => img.classList.remove('hover')); 
    // --- GÖLGE DEĞİŞİKLİKLERİ BAŞLANGIÇ ---
    planetImages.forEach(img => {
      const planetShadowClasses = ['mercury-shadow', 'venus-shadow', 'earth-shadow', 'mars-shadow', 'jupiter-shadow', 'saturn-shadow', 'uranus-shadow', 'neptune-shadow'];
      planetShadowClasses.forEach(shadowClass => img.classList.remove(shadowClass));
    });
    // --- GÖLGE DEĞİŞİKLİKLERİ SONUÇ ---
    document.querySelectorAll('.planetName').forEach(name => name.classList.remove('burst-shifted')); 

    const initialButton = document.getElementById(chosenPlanet); 
    const initialImage = document.querySelector(`#right img[src*="${chosenPlanet}"]`); 

    if (initialButton) { 
        initialButton.classList.add('right-aligned'); 
        const planetNameElement = initialButton.previousElementSibling; 
        if (planetNameElement && planetNameElement.classList.contains('planetName')) { 
            planetNameElement.classList.add('burst-shifted'); 
        } 
    } 
  
    if (initialImage) { 
        initialImage.classList.add('hover'); 
        // --- GÖLGE DEĞİŞİKLİKLERİ BAŞLANGIÇ ---
        initialImage.classList.add(`${chosenPlanet}-shadow`);
        // --- GÖLGE DEĞİŞİKLİKLERİ SONUÇ ---
    } 
  
    updatePlanetContainerPosition(); 
    updateTopContent("milkyway"); 
} 

 buttons.forEach(button => { 
     button.addEventListener('click', event => { 
         const clickedElement = event.target; 
         const targetButton = clickedElement.tagName === 'BUTTON' ? clickedElement : clickedElement.closest('button'); 

         buttons.forEach(btn => btn.classList.remove('right-aligned')); 
         document.querySelectorAll('.planetName').forEach(name => name.classList.remove('burst-shifted')); 
         planetImages.forEach(img => img.classList.remove('hover')); 

         // --- NEW LINE --- 
         // Stop all images from spinning before starting a new one 
         planetImages.forEach(img => img.classList.remove('spin')); 
          
         chosenPlanet = targetButton.id; 
         console.log("Clicked planet ID:", chosenPlanet); 
          
         targetButton.classList.add('right-aligned'); 
          
         const planetNameElement = targetButton.previousElementSibling; 
          
         if (planetNameElement && planetNameElement.classList.contains('planetName')) { 
             planetNameElement.classList.add('burst-shifted'); 
         } 
          
         const matchingImage = document.querySelector(`#right img[src*="${chosenPlanet}"]`); 
         if (matchingImage) { 
             matchingImage.classList.add('hover'); 
             // --- NEW LINE --- 
             // Start the new planet image spinning 
             matchingImage.classList.add('active');  
             // --- GÖLGE DEĞİŞİKLİKLERİ BAŞLANGIÇ ---
             // Önce tüm görsellerdeki gölge sınıflarını temizle
             planetImages.forEach(img => {
                const planetShadowClasses = ['mercury-shadow', 'venus-shadow', 'earth-shadow', 'mars-shadow', 'jupiter-shadow', 'saturn-shadow', 'uranus-shadow', 'neptune-shadow'];
                planetShadowClasses.forEach(shadowClass => img.classList.remove(shadowClass));
             });

             // Ardından sadece seçili gezegene ait gölge sınıfını ekle
             matchingImage.classList.add(`${chosenPlanet}-shadow`);
             // --- GÖLGE DEĞİŞİKLİKLERİ SONUÇ ---
         } 
          
         updatePlanetContainerPosition(); 
         updateTopContent(chosenPlanet); 
     }); 
 }); 

 readMoreButton.addEventListener('click', toggleDescription); 

 document.addEventListener('DOMContentLoaded', initializePage); 
 window.addEventListener('resize', updatePlanetContainerPosition);