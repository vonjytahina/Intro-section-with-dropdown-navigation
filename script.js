// DOM elements declarations
const featuresButton = document.querySelector('.features')
const featuresSubmenu = document.querySelector('header .features-sub-menu')
const companyButton = document.querySelector('.company')
const companySubmenu = document.querySelector('header .company-sub-menu')
const mobileOpenButton = document.querySelector('.mobile-button')
const mobileCloseButton = document.querySelector('.mobile-button-close')
const mobileMenu = document.querySelector('.mobile-menu')
const containerVignet = document.querySelector('.container-vignet')
const mobileFeaturesButton = document.querySelector('.mobile-features')
const mobileFeaturesSubMenu = document.querySelector('.mobile-features-sub-menu')
const mobileCompanyButton = document.querySelector('.mobile-company')
const mobileCompanySubMenu = document.querySelector('.mobile-company-sub-menu')


// dropdow menu
featuresButton.onclick = () => {
  if(!featuresSubmenu.classList.contains('features-dropdown-animation')) {
    featuresSubmenu.classList.remove('features-dropdown-animation-reverse')
    featuresSubmenu.classList.add('features-dropdown-animation')
    document.querySelector('.features .arrow-down').style.display = "none"
    document.querySelector('.features .arrow-up').style.display  = "inline-block"
  } else if (featuresSubmenu.classList.contains('features-dropdown-animation')) {
    featuresSubmenu.classList.remove('features-dropdown-animation')
    featuresSubmenu.classList.add('features-dropdown-animation-reverse')
    document.querySelector('.features .arrow-up').style.display = "none"
    document.querySelector('.features .arrow-down').style.display  = "inline-block"
  }
}

companyButton.onclick = () => {
  if(!companySubmenu.classList.contains('company-dropdown-animation')) {
    companySubmenu.classList.remove('company-dropdown-animation-reverse')
    companySubmenu.classList.add('company-dropdown-animation')
    document.querySelector('.company .arrow-down').style.display = "none"
    document.querySelector('.company .arrow-up').style.display  = "inline-block"
  } else if (companySubmenu.classList.contains('company-dropdown-animation')) {
    companySubmenu.classList.remove('company-dropdown-animation')
    companySubmenu.classList.add('company-dropdown-animation-reverse')
    document.querySelector('.company .arrow-up').style.display = "none"
    document.querySelector('.company .arrow-down').style.display  = "inline-block"
  }
}

// mobile menu trigger
mobileOpenButton.onclick = () => {
  if(!mobileMenu.classList.contains('mobile-menu-animation')) {
    mobileMenu.classList.remove('mobile-menu-animation-reverse')
    mobileMenu.classList.add('mobile-menu-animation')
    containerVignet.style.display = "block"
  } 
}

mobileCloseButton.onclick = () => {
  if(mobileMenu.classList.contains('mobile-menu-animation')) {
    mobileMenu.classList.remove('mobile-menu-animation')
    mobileMenu.classList.add('mobile-menu-animation-reverse')
    containerVignet.style.display = "none"
  } 
}

// mobile dropdown menu
mobileFeaturesButton.onclick = () => {
  if(!mobileFeaturesSubMenu.classList.contains('mobile-features-dropdown-animation')) {
    mobileFeaturesSubMenu.classList.remove('mobile-features-dropdown-animation-reverse')
    mobileFeaturesSubMenu.classList.add('mobile-features-dropdown-animation')
    document.querySelector('.mobile-features .arrow-down').style.display = "none"
    document.querySelector('.mobile-features .arrow-up').style.display  = "inline-block"
  } else if(mobileFeaturesSubMenu.classList.contains('mobile-features-dropdown-animation')) {
    mobileFeaturesSubMenu.classList.remove('mobile-features-dropdown-animation')
    mobileFeaturesSubMenu.classList.add('mobile-features-dropdown-animation-reverse')
    document.querySelector('.mobile-features .arrow-up').style.display = "none"
    document.querySelector('.mobile-features .arrow-down').style.display  = "inline-block"
  }
}

mobileCompanyButton.onclick = () => {
  if(!mobileCompanySubMenu.classList.contains('mobile-company-dropdown-animation')) {
    mobileCompanySubMenu.classList.remove('mobile-company-dropdown-animation-reverse')
    mobileCompanySubMenu.classList.add('mobile-company-dropdown-animation')
    document.querySelector('.mobile-company .arrow-down').style.display = "none"
    document.querySelector('.mobile-company .arrow-up').style.display  = "inline-block"
  } else if(mobileCompanySubMenu.classList.contains('mobile-company-dropdown-animation')) {
    mobileCompanySubMenu.classList.remove('mobile-company-dropdown-animation')
    mobileCompanySubMenu.classList.add('mobile-company-dropdown-animation-reverse')
    document.querySelector('.mobile-company .arrow-up').style.display = "none"
    document.querySelector('.mobile-company .arrow-down').style.display  = "inline-block"
  }
}