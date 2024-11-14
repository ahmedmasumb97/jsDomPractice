const countries = [
    {
      name: 'Afghanistan',
      code: 'AF',
      timezone: 'Afghanistan Standard Time',
      utc: 'UTC+04:30',
      mobileCode: '+93',
      https:"https://flagcdn.com/w320/af.png"

    }, 
    {
        name: 'Albania',
        code: 'AL',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+355',
        https: 'https://flagcdn.com/w320/al.png'
    },
    {
        name: 'Algeria',
        code: 'DZ',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+213',
        https: 'https://flagcdn.com/w320/dz.png'
    },
    {
        name: 'American Samoa',
        code: 'AS',
        timezone: 'UTC-11',
        utc: 'UTC-11:00',
        mobileCode: '+1-684',
        https: 'https://flagcdn.com/w320/as.png'
    },
    {
        name: 'Andorra',
        code: 'AD',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+376',
        https: 'https://flagcdn.com/w320/ad.png'
    },
    {
        name: 'Angola',
        code: 'AO',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+244',
        https: 'https://flagcdn.com/w320/ao.png'
    },
    {
        name: 'Anguilla',
        code: 'AI',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-264',
        https: 'https://flagcdn.com/w320/ai.png'
    },
    {
        name: 'Antarctica',
        code: 'AQ',
        timezone: 'Pacific SA Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+',
        https: 'https://flagcdn.com/w320/aq.png'
    },
    {
        name: 'Antigua and Barbuda',
        code: 'AG',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-268',
        https: 'https://flagcdn.com/w320/ag.png'
    },
    {
        name: 'Argentina',
        code: 'AR',
        timezone: 'Argentina Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+54',
        https: 'https://flagcdn.com/w320/ar.png'
    },
    {
        name: 'Armenia',
        code: 'AM',
        timezone: 'Caucasus Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+374',
        https: 'https://flagcdn.com/w320/am.png'
    },
    {
        name: 'Aruba',
        code: 'AW',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+297',
        https: 'https://flagcdn.com/w320/aw.png'
    },
    {
        name: 'Australia',
        code: 'AU',
        timezone: 'AUS Eastern Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+61',
        https: 'https://flagcdn.com/w320/au.png'
    },
    {
        name: 'Austria',
        code: 'AT',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+43',
        https: 'https://flagcdn.com/w320/at.png'
    },
    {
        name: 'Azerbaijan',
        code: 'AZ',
        timezone: 'Azerbaijan Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+994',
        https: 'https://flagcdn.com/w320/az.png'
    },
    {
        name: 'Bahamas, The',
        code: 'BS',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-242',
        https: 'https://flagcdn.com/w320/bs.png'
    },
    {
        name: 'Bahrain',
        code: 'BH',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+973',
        https: 'https://flagcdn.com/w320/bh.png'
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        timezone: 'Bangladesh Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+880',
        https: 'https://flagcdn.com/w320/bd.png'
    },
    {
        name: 'Barbados',
        code: 'BB',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-246',
        https: 'https://flagcdn.com/w320/bb.png'
    },
    
    // ed
    {
        name: 'Belarus',
        code: 'BY',
        timezone: 'Belarus Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+375',
        https: 'https://flagcdn.com/w320/by.png'
    },
    {
        name: 'Belgium',
        code: 'BE',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+32',
        https: 'https://flagcdn.com/w320/be.png'
    },
    {
        name: 'Belize',
        code: 'BZ',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+501',
        https: 'https://flagcdn.com/w320/bz.png'
    },
    {
        name: 'Benin',
        code: 'BJ',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+229',
        https: 'https://flagcdn.com/w320/bj.png'
    },
    {
        name: 'Bermuda',
        code: 'BM',
        timezone: 'Atlantic Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-441',
        https: 'https://flagcdn.com/w320/bm.png'
    },
    {
        name: 'Bhutan',
        code: 'BT',
        timezone: 'Bangladesh Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+975',
        https: 'https://flagcdn.com/w320/bt.png'
    },
    {
        name: 'Bolivarian Republic of Venezuela',
        code: 'VE',
        timezone: 'Venezuela Standard Time',
        utc: 'UTC-04:30',
        mobileCode: '+58',
        https: 'https://flagcdn.com/w320/ve.png'
    },
    {
        name: 'Bolivia',
        code: 'BO',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+591',
        https: 'https://flagcdn.com/w320/bo.png'
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        code: 'BQ',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+599',
        https: 'https://flagcdn.com/w320/bq.png'
    },
    {
        name: 'Bosnia and Herzegovina',
        code: 'BA',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+387',
        https: 'https://flagcdn.com/w320/ba.png'
    },
    {
        name: 'Botswana',
        code: 'BW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+267',
        https: 'https://flagcdn.com/w320/bw.png'
    },
    {
        name: 'Bouvet Island',
        code: 'BV',
        timezone: 'UTC',
        utc: 'UTC',
        mobileCode: '+',
        https: 'https://flagcdn.com/w320/bv.png'
    },
    {
        name: 'Brazil',
        code: 'BR',
        timezone: 'E. South America Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+55',
        https: 'https://flagcdn.com/w320/br.png'
    },
    {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+246',
        https: 'https://flagcdn.com/w320/io.png'
    },
    {
        name: 'Brunei',
        code: 'BN',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+673',
        https: 'https://flagcdn.com/w320/bn.png'
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+359',
        https: 'https://flagcdn.com/w320/bg.png'
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+226',
        https: 'https://flagcdn.com/w320/bf.png'
    },
    {
        name: 'Burundi',
        code: 'BI',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+257',
        https: 'https://flagcdn.com/w320/bi.png'
    },
    {
        name: 'Cabo Verde',
        code: 'CV',
        timezone: 'Cape Verde Standard Time',
        utc: 'UTC-01:00',
        mobileCode: '+238',
        https: 'https://flagcdn.com/w320/cv.png'
    },
    {
        name: 'Cambodia',
        code: 'KH',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+855',
        https: 'https://flagcdn.com/w320/kh.png'
    },
    {
        name: 'Cameroon',
        code: 'CM',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+237',
        https: 'https://flagcdn.com/w320/cm.png'
    },
    

    // ed
    {
        name: 'Finland',
        code: 'FI',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+358',
        https: 'https://flagcdn.com/w320/fi.png'
    },
    {
        name: 'France',
        code: 'FR',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+33',
        https: 'https://flagcdn.com/w320/fr.png'
    },
    {
        name: 'Gabon',
        code: 'GA',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+241',
        https: 'https://flagcdn.com/w320/ga.png'
    },
    {
        name: 'Gambia',
        code: 'GM',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+220',
        https: 'https://flagcdn.com/w320/gm.png'
    },
    {
        name: 'Georgia',
        code: 'GE',
        timezone: 'Georgia Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+995',
        https: 'https://flagcdn.com/w320/ge.png'
    },
    {
        name: 'Germany',
        code: 'DE',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+49',
        https: 'https://flagcdn.com/w320/de.png'
    },
    {
        name: 'Ghana',
        code: 'GH',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+233',
        https: 'https://flagcdn.com/w320/gh.png'
    },
    {
        name: 'Greece',
        code: 'GR',
        timezone: 'E. European Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+30',
        https: 'https://flagcdn.com/w320/gr.png'
    },
    {
        name: 'Greenland',
        code: 'GL',
        timezone: 'Greenland Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+299',
        https: 'https://flagcdn.com/w320/gl.png'
    },
    {
        name: 'Grenada',
        code: 'GD',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-473',
        https: 'https://flagcdn.com/w320/gd.png'
    },
    {
        name: 'Guatemala',
        code: 'GT',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+502',
        https: 'https://flagcdn.com/w320/gt.png'
    },
    {
        name: 'Guinea',
        code: 'GN',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+224',
        https: 'https://flagcdn.com/w320/gn.png'
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+245',
        https: 'https://flagcdn.com/w320/gw.png'
    },
    {
        name: 'Guyana',
        code: 'GY',
        timezone: 'SA Eastern Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+592',
        https: 'https://flagcdn.com/w320/gy.png'
    },
    {
        name: 'Haiti',
        code: 'HT',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+509',
        https: 'https://flagcdn.com/w320/ht.png'
    },
    {
        name: 'Honduras',
        code: 'HN',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+504',
        https: 'https://flagcdn.com/w320/hn.png'
    },
    {
        name: 'Hungary',
        code: 'HU',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+36',
        https: 'https://flagcdn.com/w320/hu.png'
    },
    {
        name: 'Iceland',
        code: 'IS',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+354',
        https: 'https://flagcdn.com/w320/is.png'
    },
    {
        name: 'India',
        code: 'IN',
        timezone: 'India Standard Time',
        utc: 'UTC+05:30',
        mobileCode: '+91',
        https: 'https://flagcdn.com/w320/in.png'
    },
    {
        name: 'Indonesia',
        code: 'ID',
        timezone: 'W. Indonesia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+62',
        https: 'https://flagcdn.com/w320/id.png'
    },
    {
        name: 'Iran',
        code: 'IR',
        timezone: 'Iran Standard Time',
        utc: 'UTC+03:30',
        mobileCode: '+98',
        https: 'https://flagcdn.com/w320/ir.png'
    },
    {
        name: 'Iraq',
        code: 'IQ',
        timezone: 'Arabic Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+964',
        https: 'https://flagcdn.com/w320/iq.png'
    },
    {
        name: 'Ireland',
        code: 'IE',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+353',
        https: 'https://flagcdn.com/w320/ie.png'
    },
    {
        name: 'Israel',
        code: 'IL',
        timezone: 'Israel Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+972',
        https: 'https://flagcdn.com/w320/il.png'
    },
    {
        name: 'Italy',
        code: 'IT',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+39',
        https: 'https://flagcdn.com/w320/it.png'
    },
    {
        name: 'Jamaica',
        code: 'JM',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-876',
        https: 'https://flagcdn.com/w320/jm.png'
    },
    {
        name: 'Japan',
        code: 'JP',
        timezone: 'Tokyo Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+81',
        https: 'https://flagcdn.com/w320/jp.png'
    },
    {
        name: 'Jordan',
        code: 'JO',
        timezone: 'Arabian Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+962',
        https: 'https://flagcdn.com/w320/jo.png'
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+7',
        https: 'https://flagcdn.com/w320/kz.png'
    },
    {
        name: 'Kenya',
        code: 'KE',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+254',
        https: 'https://flagcdn.com/w320/ke.png'
    },
    {
        name: 'Kiribati',
        code: 'KI',
        timezone: 'Gilbert Island Time',
        utc: 'UTC+12:00',
        mobileCode: '+686',
        https: 'https://flagcdn.com/w320/ki.png'
    },
    {
        name: 'Kuwait',
        code: 'KW',
        timezone: 'Arabian Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+965',
        https: 'https://flagcdn.com/w320/kw.png'
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        timezone: 'Kyrgyzstan Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+996',
        https: 'https://flagcdn.com/w320/kg.png'
    },
    {
        name: 'Laos',
        code: 'LA',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+856',
        https: 'https://flagcdn.com/w320/la.png'
    },
    {
        name: 'Latvia',
        code: 'LV',
        timezone: 'E. European Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+371',
        https: 'https://flagcdn.com/w320/lv.png'
    },
    {
        name: 'Lebanon',
        code: 'LB',
        timezone: 'E. European Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+961',
        https: 'https://flagcdn.com/w320/lb.png'
    },
    {
        name: 'Lesotho',
        code: 'LS',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+266',
        https:''
    },
    

    // ed
    {
        name: 'French Guiana',
        code: 'GF',
        timezone: 'SA Eastern Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+594',
        https: 'https://flagcdn.com/gf.svg'
    },
    {
        name: 'French Polynesia',
        code: 'PF',
        timezone: 'Hawaiian Standard Time',
        utc: 'UTC-10:00',
        mobileCode: '+689',
        https: 'https://flagcdn.com/pf.svg'
    },
    {
        name: 'French Southern and Antarctic Lands',
        code: 'TF',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+',
        https: 'https://flagcdn.com/tf.svg'
    },
    {
        name: 'Gabon',
        code: 'GA',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+241',
        https: 'https://flagcdn.com/ga.svg'
    },
    {
        name: 'Gambia, The',
        code: 'GM',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+220',
        https: 'https://flagcdn.com/gm.svg'
    },
    {
        name: 'Georgia',
        code: 'GE',
        timezone: 'Georgian Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+995',
        https: 'https://flagcdn.com/ge.svg'
    },
    {
        name: 'Germany',
        code: 'DE',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+49',
        https: 'https://flagcdn.com/de.svg'
    },
    {
        name: 'Ghana',
        code: 'GH',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+233',
        https: 'https://flagcdn.com/gh.svg'
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+350',
        https: 'https://flagcdn.com/gi.svg'
    },
    {
        name: 'Greece',
        code: 'GR',
        timezone: 'GTB Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+30',
        https: 'https://flagcdn.com/gr.svg'
    },
    {
        name: 'Greenland',
        code: 'GL',
        timezone: 'Greenland Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+299',
        https: 'https://flagcdn.com/gl.svg'
    },
    {
        name: 'Grenada',
        code: 'GD',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-473',
        https: 'https://flagcdn.com/gd.svg'
    },
    {
        name: 'Guadeloupe',
        code: 'GP',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+590',
        https: 'https://flagcdn.com/gp.svg'
    },
    {
        name: 'Guam',
        code: 'GU',
        timezone: 'West Pacific Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+1-671',
        https: 'https://flagcdn.com/gu.svg'
    },
    {
        name: 'Guatemala',
        code: 'GT',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+502',
        https: 'https://flagcdn.com/gt.svg'
    },
    {
        name: 'Guernsey',
        code: 'GG',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44-1481',
        https: 'https://flagcdn.com/gg.svg'
    },
    {
        name: 'Guinea',
        code: 'GN',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+224',
        https: 'https://flagcdn.com/gn.svg'
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+245',
        https: 'https://flagcdn.com/gw.svg'
    },
    {
        name: 'Guyana',
        code: 'GY',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+592',
        https: 'https://flagcdn.com/gy.svg'
    },
    {
        name: 'Haiti',
        code: 'HT',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+509',
        https: 'https://flagcdn.com/ht.svg'
    },
    {
        name: 'Heard Island and McDonald Islands',
        code: 'HM',
        timezone: 'Mauritius Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+ ',
        https: 'https://flagcdn.com/hm.svg'
    },
    {
        name: 'Honduras',
        code: 'HN',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+504',
        https: 'https://flagcdn.com/hn.svg'
    },
    {
        name: 'Hong Kong SAR',
        code: 'HK',
        timezone: 'China Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+852',
        https: 'https://flagcdn.com/hk.svg'
    },
    {
        name: 'Hungary',
        code: 'HU',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+36',
        https: 'https://flagcdn.com/hu.svg'
    },
    {
        name: 'Iceland',
        code: 'IS',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+354',
        https: 'https://flagcdn.com/is.svg'
    },
    {
        name: 'India',
        code: 'IN',
        timezone: 'India Standard Time',
        utc: 'UTC+05:30',
        mobileCode: '+91',
        https: 'https://flagcdn.com/in.svg'
    },
    {
        name: 'Indonesia',
        code: 'ID',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+62',
        https: 'https://flagcdn.com/id.svg'
    },
    
    // ed
    {
        name: 'Iran',
        code: 'IR',
        timezone: 'Iran Standard Time',
        utc: 'UTC+03:30',
        mobileCode: '+98',
        https: 'https://flagcdn.com/ir.svg'
    },
    {
        name: 'Iraq',
        code: 'IQ',
        timezone: 'Arabic Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+964',
        https: 'https://flagcdn.com/iq.svg'
    },
    {
        name: 'Ireland',
        code: 'IE',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+353',
        https: 'https://flagcdn.com/ie.svg'
    },
    {
        name: 'Israel',
        code: 'IL',
        timezone: 'Israel Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+972',
        https: 'https://flagcdn.com/il.svg'
    },
    {
        name: 'Italy',
        code: 'IT',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+39',
        https: 'https://flagcdn.com/it.svg'
    },
    {
        name: 'Jamaica',
        code: 'JM',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-876',
        https: 'https://flagcdn.com/jm.svg'
    },
    {
        name: 'Jan Mayen',
        code: 'SJ',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+47',
        https: 'https://flagcdn.com/sj.svg'
    },
    {
        name: 'Japan',
        code: 'JP',
        timezone: 'Tokyo Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+81',
        https: 'https://flagcdn.com/jp.svg'
    },
    {
        name: 'Jersey',
        code: 'JE',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44-1534',
        https: 'https://flagcdn.com/je.svg'
    },
    {
        name: 'Jordan',
        code: 'JO',
        timezone: 'Jordan Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+962',
        https: 'https://flagcdn.com/jo.svg'
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+7',
        https: 'https://flagcdn.com/kz.svg'
    },
    {
        name: 'Kenya',
        code: 'KE',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+254',
        https: 'https://flagcdn.com/ke.svg'
    },
    {
        name: 'Kiribati',
        code: 'KI',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+686',
        https: 'https://flagcdn.com/ki.svg'
    },
    {
        name: 'Korea',
        code: 'KR',
        timezone: 'Korea Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+82',
        https: 'https://flagcdn.com/kr.svg'
    },
    {
        name: 'Kosovo',
        code: 'XK',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+',
        https: 'https://flagcdn.com/xk.svg'
    },
    {
        name: 'Kuwait',
        code: 'KW',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+965',
        https: 'https://flagcdn.com/kw.svg'
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+996',
        https: 'https://flagcdn.com/kg.svg'
    },
    {
        name: 'Laos',
        code: 'LA',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+856',
        https: 'https://flagcdn.com/la.svg'
    },
    {
        name: 'Latvia',
        code: 'LV',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+371',
        https: 'https://flagcdn.com/lv.svg'
    },
    {
        name: 'Lebanon',
        code: 'LB',
        timezone: 'Middle East Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+961',
        https: 'https://flagcdn.com/lb.svg'
    },
    {
        name: 'Lesotho',
        code: 'LS',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+266',
        https: 'https://flagcdn.com/ls.svg'
    },
    {
        name: 'Liberia',
        code: 'LR',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+231',
        https: 'https://flagcdn.com/lr.svg'
    },
    {
        name: 'Libya',
        code: 'LY',
        timezone: 'E. Europe Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+218',
        https: 'https://flagcdn.com/ly.svg'
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+423',
        https: 'https://flagcdn.com/li.svg'
    },
    {
        name: 'Lithuania',
        code: 'LT',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+370',
        https: 'https://flagcdn.com/lt.svg'
    },
    {
        name: 'Luxembourg',
        code: 'LU',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+352',
        https: 'https://flagcdn.com/lu.svg'
    },
    {
        name: 'Macao SAR',
        code: 'MO',
        timezone: 'China Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+853',
        https: 'https://flagcdn.com/mo.svg'
    },
    {
        name: 'Macedonia, Former Yugoslav Republic of',
        code: 'MK',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+389',
        https: 'https://flagcdn.com/mk.svg'
    },
    {
        name: 'Madagascar',
        code: 'MG',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+261',
        https: 'https://flagcdn.com/mg.svg'
    },
    {
        name: 'Malawi',
        code: 'MW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+265',
        https: 'https://flagcdn.com/mw.svg'
    },
    {
        name: 'Malaysia',
        code: 'MY',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+60',
        https: 'https://flagcdn.com/my.svg'
    },
    
    // ed
    
        {
            "name": "Maldives",
            "code": "MV",
            "timezone": "West Asia Standard Time",
            "utc": "UTC+05:00",
            "mobileCode": "+960",
            "flag": "https://restcountries.com/data/mdi.svg"
        },
        {
            "name": "Mali",
            "code": "ML",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+223",
            "flag": "https://restcountries.com/data/mli.svg"
        },
        {
            "name": "Malta",
            "code": "MT",
            "timezone": "W. Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+356",
            "flag": "https://restcountries.com/data/mlt.svg"
        },
        {
            "name": "Man, Isle of",
            "code": "IM",
            "timezone": "GMT Standard Time",
            "utc": "UTC",
            "mobileCode": "+44-1624",
            "flag": "https://restcountries.com/data/imn.svg"
        },
        {
            "name": "Marshall Islands",
            "code": "MH",
            "timezone": "UTC+12",
            "utc": "UTC+12:00",
            "mobileCode": "+692",
            "flag": "https://restcountries.com/data/mhl.svg"
        },
        {
            "name": "Martinique",
            "code": "MQ",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+596",
            "flag": "https://restcountries.com/data/mtq.svg"
        },
        {
            "name": "Mauritania",
            "code": "MR",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+222",
            "flag": "https://restcountries.com/data/mrt.svg"
        },
        {
            "name": "Mauritius",
            "code": "MU",
            "timezone": "Mauritius Standard Time",
            "utc": "UTC+04:00",
            "mobileCode": "+230",
            "flag": "https://restcountries.com/data/mus.svg"
        },
        {
            "name": "Mayotte",
            "code": "YT",
            "timezone": "E. Africa Standard Time",
            "utc": "UTC+03:00",
            "mobileCode": "+262",
            "flag": "https://restcountries.com/data/myt.svg"
        },
        {
            "name": "Mexico",
            "code": "MX",
            "timezone": "Central Standard Time (Mexico)",
            "utc": "UTC-06:00",
            "mobileCode": "+52",
            "flag": "https://restcountries.com/data/mex.svg"
        },
        {
            "name": "Micronesia",
            "code": "FM",
            "timezone": "West Pacific Standard Time",
            "utc": "UTC+10:00",
            "mobileCode": "+691",
            "flag": "https://restcountries.com/data/fsm.svg"
        },
        {
            "name": "Moldova",
            "code": "MD",
            "timezone": "GTB Standard Time",
            "utc": "UTC+02:00",
            "mobileCode": "+373",
            "flag": "https://restcountries.com/data/mda.svg"
        },
        {
            "name": "Monaco",
            "code": "MC",
            "timezone": "W. Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+377",
            "flag": "https://restcountries.com/data/mco.svg"
        },
        {
            "name": "Mongolia",
            "code": "MN",
            "timezone": "Ulaanbaatar Standard Time",
            "utc": "UTC+08:00",
            "mobileCode": "+976",
            "flag": "https://restcountries.com/data/mng.svg"
        },
    
    

    // end
    
        {
            "name": "Montenegro",
            "code": "ME",
            "timezone": "Central European Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+382",
            "flag": "https://restcountries.com/data/mne.svg"
        },
        {
            "name": "Montserrat",
            "code": "MS",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+1-664",
            "flag": "https://restcountries.com/data/msr.svg"
        },
        {
            "name": "Morocco",
            "code": "MA",
            "timezone": "Morocco Standard Time",
            "utc": "UTC",
            "mobileCode": "+212",
            "flag": "https://restcountries.com/data/mar.svg"
        },
        {
            "name": "Mozambique",
            "code": "MZ",
            "timezone": "South Africa Standard Time",
            "utc": "UTC+02:00",
            "mobileCode": "+258",
            "flag": "https://restcountries.com/data/moz.svg"
        },
        {
            "name": "Myanmar",
            "code": "MM",
            "timezone": "Myanmar Standard Time",
            "utc": "UTC+06:30",
            "mobileCode": "+95",
            "flag": "https://restcountries.com/data/mmr.svg"
        },
        {
            "name": "Namibia",
            "code": "NA",
            "timezone": "Namibia Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+264",
            "flag": "https://restcountries.com/data/nam.svg"
        },
        {
            "name": "Nauru",
            "code": "NR",
            "timezone": "UTC+12",
            "utc": "UTC+12:00",
            "mobileCode": "+674",
            "flag": "https://restcountries.com/data/nru.svg"
        },
        {
            "name": "Nepal",
            "code": "NP",
            "timezone": "Nepal Standard Time",
            "utc": "UTC+05:45",
            "mobileCode": "+977",
            "flag": "https://restcountries.com/data/npl.svg"
        },
        {
            "name": "Netherlands",
            "code": "NL",
            "timezone": "W. Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+31",
            "flag": "https://restcountries.com/data/nld.svg"
        },
        {
            "name": "New Caledonia",
            "code": "NC",
            "timezone": "Central Pacific Standard Time",
            "utc": "UTC+11:00",
            "mobileCode": "+687",
            "flag": "https://restcountries.com/data/ncl.svg"
        },
        {
            "name": "New Zealand",
            "code": "NZ",
            "timezone": "New Zealand Standard Time",
            "utc": "UTC+12:00",
            "mobileCode": "+64",
            "flag": "https://restcountries.com/data/nzl.svg"
        },
        {
            "name": "Nicaragua",
            "code": "NI",
            "timezone": "Central America Standard Time",
            "utc": "UTC-06:00",
            "mobileCode": "+505",
            "flag": "https://restcountries.com/data/nic.svg"
        },
        {
            "name": "Niger",
            "code": "NE",
            "timezone": "W. Central Africa Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+227",
            "flag": "https://restcountries.com/data/ner.svg"
        },
        {
            "name": "Nigeria",
            "code": "NG",
            "timezone": "W. Central Africa Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+234",
            "flag": "https://restcountries.com/data/nga.svg"
        },
        {
            "name": "Niue",
            "code": "NU",
            "timezone": "UTC-11",
            "utc": "UTC-11:00",
            "mobileCode": "+683",
            "flag": "https://restcountries.com/data/niu.svg"
        },
        {
            "name": "Norfolk Island",
            "code": "NF",
            "timezone": "Central Pacific Standard Time",
            "utc": "UTC+11:00",
            "mobileCode": "+672",
            "flag": "https://restcountries.com/data/nfk.svg"
        },
        {
            "name": "North Korea",
            "code": "KP",
            "timezone": "Korea Standard Time",
            "utc": "UTC+09:00",
            "mobileCode": "+850",
            "flag": "https://restcountries.com/data/kor.svg"
        },
        {
            "name": "Northern Mariana Islands",
            "code": "MP",
            "timezone": "West Pacific Standard Time",
            "utc": "UTC+10:00",
            "mobileCode": "+1-670",
            "flag": "https://restcountries.com/data/mnp.svg"
        },
        {
            "name": "Norway",
            "code": "NO",
            "timezone": "W. Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+47",
            "flag": "https://restcountries.com/data/nor.svg"
        },
        {
            "name": "Oman",
            "code": "OM",
            "timezone": "Arabian Standard Time",
            "utc": "UTC+04:00",
            "mobileCode": "+968",
            "flag": "https://restcountries.com/data/omn.svg"
        },
    
    
    //ed
    
        {
            "name": "Pakistan",
            "code": "PK",
            "timezone": "Pakistan Standard Time",
            "utc": "UTC+05:00",
            "mobileCode": "+92",
            "flag": "https://restcountries.com/data/pak.svg"
        },
        {
            "name": "Palau",
            "code": "PW",
            "timezone": "Tokyo Standard Time",
            "utc": "UTC+09:00",
            "mobileCode": "+680",
            "flag": "https://restcountries.com/data/plw.svg"
        },
        {
            "name": "Palestinian Authority",
            "code": "PS",
            "timezone": "Egypt Standard Time",
            "utc": "UTC+02:00",
            "mobileCode": "+970",
            "flag": "https://restcountries.com/data/pse.svg"
        },
        {
            "name": "Panama",
            "code": "PA",
            "timezone": "SA Pacific Standard Time",
            "utc": "UTC-05:00",
            "mobileCode": "+507",
            "flag": "https://restcountries.com/data/pan.svg"
        },
        {
            "name": "Papua New Guinea",
            "code": "PG",
            "timezone": "West Pacific Standard Time",
            "utc": "UTC+10:00",
            "mobileCode": "+675",
            "flag": "https://restcountries.com/data/png.svg"
        },
        {
            "name": "Paraguay",
            "code": "PY",
            "timezone": "Paraguay Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+595",
            "flag": "https://restcountries.com/data/pry.svg"
        },
        {
            "name": "Peru",
            "code": "PE",
            "timezone": "SA Pacific Standard Time",
            "utc": "UTC-05:00",
            "mobileCode": "+51",
            "flag": "https://restcountries.com/data/per.svg"
        },
        {
            "name": "Philippines",
            "code": "PH",
            "timezone": "Singapore Standard Time",
            "utc": "UTC+08:00",
            "mobileCode": "+63",
            "flag": "https://restcountries.com/data/phil.svg"
        },
        {
            "name": "Pitcairn Islands",
            "code": "PN",
            "timezone": "Pacific Standard Time",
            "utc": "UTC-08:00",
            "mobileCode": "+870",
            "flag": "https://restcountries.com/data/pit.svg"
        },
        {
            "name": "Poland",
            "code": "PL",
            "timezone": "Central European Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+48",
            "flag": "https://restcountries.com/data/pol.svg"
        },
        {
            "name": "Portugal",
            "code": "PT",
            "timezone": "GMT Standard Time",
            "utc": "UTC",
            "mobileCode": "+351",
            "flag": "https://restcountries.com/data/prt.svg"
        },
        {
            "name": "Puerto Rico",
            "code": "PR",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+1-787 and 1-939",
            "flag": "https://restcountries.com/data/pri.svg"
        },
        {
            "name": "Qatar",
            "code": "QA",
            "timezone": "Arab Standard Time",
            "utc": "UTC+03:00",
            "mobileCode": "+974",
            "flag": "https://restcountries.com/data/qat.svg"
        },
        {
            "name": "Reunion",
            "code": "RE",
            "timezone": "Mauritius Standard Time",
            "utc": "UTC+04:00",
            "mobileCode": "+262",
            "flag": "https://restcountries.com/data/reu.svg"
        },
        {
            "name": "Romania",
            "code": "RO",
            "timezone": "GTB Standard Time",
            "utc": "UTC+02:00",
            "mobileCode": "+40",
            "flag": "https://restcountries.com/data/rou.svg"
        },
        {
            "name": "Russia",
            "code": "RU",
            "timezone": "Russian Standard Time",
            "utc": "UTC+03:00",
            "mobileCode": "+7",
            "flag": "https://restcountries.com/data/rus.svg"
        },
        {
            "name": "Rwanda",
            "code": "RW",
            "timezone": "South Africa Standard Time",
            "utc": "UTC+02:00",
            "mobileCode": "+250",
            "flag": "https://restcountries.com/data/rwa.svg"
        },
        {
            "name": "Saint Barthélemy",
            "code": "BL",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+590",
            "flag": "https://restcountries.com/data/blm.svg"
        },
        {
            "name": "Saint Helena, Ascension and Tristan da Cunha",
            "code": "SH",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+290",
            "flag": "https://restcountries.com/data/shn.svg"
        },
        {
            "name": "Saint Kitts and Nevis",
            "code": "KN",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+1-869",
            "flag": "https://restcountries.com/data/kna.svg"
        },
        {
            "name": "Saint Lucia",
            "code": "LC",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+1-758",
            "flag": "https://restcountries.com/data/lca.svg"
        },
        {
            "name": "Saint Martin (French part)",
            "code": "MF",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+590",
            "flag": "https://restcountries.com/data/maf.svg"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "code": "PM",
            "timezone": "Greenland Standard Time",
            "utc": "UTC-03:00",
            "mobileCode": "+508",
            "flag": "https://restcountries.com/data/spm.svg"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "code": "VC",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+1-784",
            "flag": "https://restcountries.com/data/vct.svg"
        },
        {
            "name": "Samoa",
            "code": "WS",
            "timezone": "Samoa Standard Time",
            "utc": "UTC+13:00",
            "mobileCode": "+685",
            "flag": "https://restcountries.com/data/wsm.svg"
        },
        {
            "name": "San Marino",
            "code": "SM",
            "timezone": "W. Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+378",
            "flag": "https://restcountries.com/data/smr.svg"
        },
        {
            "name": "São Tomé and Príncipe",
            "code": "ST",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+239",
            "flag": "https://restcountries.com/data/stp.svg"
        },
        {
            "name": "Saudi Arabia",
            "code": "SA",
            "timezone": "Arab Standard Time",
            "utc": "UTC+03:00",
            "mobileCode": "+966",
            "flag": "https://restcountries.com/data/sau.svg"
        },
        {
            "name": "Senegal",
            "code": "SN",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+221",
            "flag": "https://restcountries.com/data/sen.svg"
        },
        {
            "name": "Serbia",
            "code": "RS",
            "timezone": "Central Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+381",
            "flag": "https://restcountries.com/data/srb.svg"
        },
        {
            "name": "Seychelles",
            "code": "SC",
            "timezone": "Mauritius Standard Time",
            "utc": "UTC+04:00",
            "mobileCode": "+248",
            "flag": "https://restcountries.com/data/syc.svg"
        },
        {
            "name": "Sierra Leone",
            "code": "SL",
            "timezone": "Greenwich Standard Time",
            "utc": "UTC",
            "mobileCode": "+232",
            "flag": "https://restcountries.com/data/sle.svg"
        },
        {
            "name": "Singapore",
            "code": "SG",
            "timezone": "Singapore Standard Time",
            "utc": "UTC+08:00",
            "mobileCode": "+65",
            "flag": "https://restcountries.com/data/sgp.svg"
        },
        {
            "name": "Sint Maarten (Dutch part)",
            "code": "SX",
            "timezone": "SA Western Standard Time",
            "utc": "UTC-04:00",
            "mobileCode": "+599",
            "flag": "https://restcountries.com/data/sxm.svg"
        },
        {
            "name": "Slovakia",
            "code": "SK",
            "timezone": "Central Europe Standard Time",
            "utc": "UTC+01:00",
            "mobileCode": "+421",
            "flag": "https://restcountries.com/data/svk.svg"
        },
    
    

    //ed
    {
      name: 'Slovenia',
      code: 'SI',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+386',
    },
    {
      name: 'Solomon Islands',
      code: 'SB',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+677',
    },
    {
      name: 'Somalia',
      code: 'SO',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+252',
    },
    {
      name: 'South Africa',
      code: 'ZA',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+27',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS',
      timezone: 'UTC-02',
      utc: 'UTC-02:00',
      mobileCode: '+',
    },
    {
      name: 'South Sudan',
      code: 'SS',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+211',
      
    },
    {
      name: 'Spain',
      code: 'ES',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+34',
    },
    {
      name: 'Sri Lanka',
      code: 'LK',
      timezone: 'Sri Lanka Standard Time',
      utc: 'UTC+05:30',
      mobileCode: '+94',
    },
    {
      name: 'Sudan',
      code: 'SD',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+249',
    },
    {
      name: 'Suriname',
      code: 'SR',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+597',
    },
    {
      name: 'Svalbard',
      code: 'SJ',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Swaziland',
      code: 'SZ',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+268',
    },
    {
      name: 'Sweden',
      code: 'SE',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+46',
    },
    {
      name: 'Switzerland',
      code: 'CH',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+41',
    },
    {
      name: 'Syria',
      code: 'SY',
      timezone: 'Syria Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+963',
    },
    {
      name: 'Taiwan',
      code: 'TW',
      timezone: 'Taipei Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+886',
    },
    {
      name: 'Tajikistan',
      code: 'TJ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+992',
    },
    {
      name: 'Tanzania',
      code: 'TZ',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+255',
    },
    {
      name: 'Thailand',
      code: 'TH',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+66',
    },
    {
      name: 'Togo',
      code: 'TG',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+228',
    },
    {
      name: 'Tokelau',
      code: 'TK',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+690',
    },
    {
      name: 'Tonga',
      code: 'TO',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+676',
    },
    {
      name: 'Trinidad and Tobago',
      code: 'TT',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-868',
    },
    {
      name: 'Tunisia',
      code: 'TN',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+216',
    },
    {
      name: 'Turkey',
      code: 'TR',
      timezone: 'Turkey Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+90',
    },
    {
      name: 'Turkmenistan',
      code: 'TM',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+993',
    },
    {
      name: 'Turks and Caicos Islands',
      code: 'TC',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-649',
    },
    {
      name: 'Tuvalu',
      code: 'TV',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+688',
    },
    {
      name: 'U.S. Minor Outlying Islands',
      code: 'UM',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+1',
    },
    {
      name: 'Uganda',
      code: 'UG',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+256',
    },
    {
      name: 'Ukraine',
      code: 'UA',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+380',
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
      timezone: 'Arabian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+971',
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44',
    },
    {
      name: 'United States',
      code: 'US',
      timezone: 'Pacific Standard Time',
      utc: 'UTC-08:00',
      mobileCode: '+1',
    },
    {
      name: 'Uruguay',
      code: 'UY',
      timezone: 'Montevideo Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+598',
    },
    {
      name: 'Uzbekistan',
      code: 'UZ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+998',
    },
    {
      name: 'Vanuatu',
      code: 'VU',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+678',
    },
    {
      name: 'Vatican City',
      code: 'VA',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+379',
    },
    {
      name: 'Vietnam',
      code: 'VN',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+84',
    },
    {
      name: 'Virgin Islands, U.S.',
      code: 'VI',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-340',
    },
    {
      name: 'Virgin Islands, British',
      code: 'VG',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-284',
    },
    {
      name: 'Wallis and Futuna',
      code: 'WF',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+681',
    },
    {
      name: 'Yemen',
      code: 'YE',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+967',
    },
    {
      name: 'Zambia',
      code: 'ZM',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+260',
    },
    {
      name: 'Zimbabwe',
      code: 'ZW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+263',
    },
  ];