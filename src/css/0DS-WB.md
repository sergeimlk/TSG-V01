### Couleurs du Design System de Winback

#### Orange
- **CMYK**: 0/56/78/0
- **RGB**: 241/136/65
- **WEB**: #F18841
- **PANTONE**: 164CP

#### Noir
- **CMYK**: 40/40/40/100
- **RGB**: 16/12/8
- **WEB**: #100C08
- **PANTONE**: BLACK CP

#### Blanc
- **CMYK**: 0/0/0/0
- **RGB**: 255/255/255
- **WEB**: #FFFFFF

#### Gris
- **CMYK**: Non spécifié
- **RGB**: 245/245/245
- **WEB**: #F5F5F5


:root {
  --orange-cmyk: 0, 56, 78, 0;
  --orange-rgb: 241, 136, 65;
  --orange-web: #F18841;
  --orange-pantone: 164CP;

  --black-cmyk: 40, 40, 40, 100;
  --black-rgb: 16, 12, 8;
  --black-web: #100C08;
  --black-pantone: BLACK CP;

  --white-cmyk: 0, 0, 0, 0;
  --white-rgb: 255, 255, 255;
  --white-web: #FFFFFF;

  --grey-web: #F5F5F5;
  --grey-rgb: 245, 245, 245;
}

.orange {
  color: var(--orange-web);
}

.black {
  color: var(--black-web);
}

.white {
  color: var(--white-web);
}

.grey {
  color: var(--grey-web);
}
