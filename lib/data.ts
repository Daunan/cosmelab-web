import { Category, Product, Language, CategoryData } from './types';

export const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const UI_TRANSLATIONS: Record<string, any> = {
    [Language.US]: {
        start: "START DIAGNOSIS",
        next: "NEXT",
        back: "BACK",
        reset: "RESET",
        buyingLink: "BUY ONLINE",
        brandFile: "BRAND GUIDE",
        catalog: "DOWNLOAD CATALOG",
        contact: "CONTACT US",
        b2b: "B2B & GLOBAL PARTNERSHIPS",
        sidebar: ["HOME", "CATEGORY", "CONCERN", "SOLUTION"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nCURATION.",
            desc: "Discover the synergy of Korea's finest beauty innovations. Expertly curated solutions from Berrisom, G9SKIN, AMILL, and COSCELL."
        },
        phases: ["PHASE 01: Care Focus", "PHASE 02: Key Concern", "Your Tailored Solution"],
        instructions: ["Select your primary care focus", "Identify your main skin concern", "We have selected these premium essentials for you:"]
    },
    [Language.ES]: {
        start: "COMENZAR DIAGNÓSTICO",
        next: "SIGUIENTE",
        back: "VOLVER",
        reset: "REINICIAR",
        buyingLink: "COMPRAR AHORA",
        brandFile: "ARCHIVO DE MARCA",
        catalog: "DESCARGAR CATÁLOGO",
        contact: "CONTACTO",
        b2b: "B2B Y ALIANZAS GLOBALES",
        sidebar: ["INICIO", "CATEGORÍAS", "SÍNTOMAS", "RECOMENDACIÓN"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "CURACIÓN\nDE BELLEZA\nCOSMELAB.",
            desc: "Descubra la excelencia de la K-Beauty a través de nuestras prestigiosas marcas globales."
        },
        phases: ["PASO 01: Categoría", "PASO 02: Preocupación", "Tu Rutina Experta"],
        instructions: ["Seleccione el área de cuidado", "¿Cuál es su principal necesidad?", "Hemos seleccionado estos productos esenciales para su perfil:"]
    },
    [Language.ME]: {
        start: "ابدأ التشخيص الآن",
        next: "التالي",
        back: "العودة",
        reset: "إعادة تعيين",
        buyingLink: "تسوق الآن",
        brandFile: "ملف العلامة التجارية",
        catalog: "تحميل الكتالوج",
        contact: "اتصل بنا",
        b2b: "شراكات الشركات والتجارة الدولية",
        sidebar: ["الرئيسية", "الفئات", "الاهتمامات", "التوصية"],
        hero: {
            sub: "شركة كوزميلاب المحدودة",
            title: "نخبة منتجات\nكوزميلاب\nالعالمية",
            desc: "اكتشفوا الحل الأمثل للعناية بالبشرة من خلال علاماتنا التجارية المتميزة والأكثر مبيعاً."
        },
        phases: ["الخطوة 01: الفئة", "الخطوة 02: الاهتمام", "الروتين الموصى به"],
        instructions: ["يرجى اختيار فئة العناية", "حدد احتياجات بشرتك بدقة", "تم اختيار هذه المنتجات بعناية لتناسب متطلبات بشرتكم:"]
    },
    [Language.JP]: {
        start: "診断を始める",
        next: "次へ",
        back: "戻る",
        reset: "最初からやり直す",
        buyingLink: "オンラインで購入",
        brandFile: "ブランド紹介",
        catalog: "カタログをダウンロード",
        contact: "お問い合わせ",
        b2b: "法人・海外パートナーシップ",
        sidebar: ["ホーム", "ケア選択", "お悩み解決", "診断結果"],
        hero: {
            sub: "株式会社コスメラボ",
            title: "COSMELAB\nプレミアム\nキュレーション",
            desc: "Berrisom、G9SKIN、AMILL、COSCELL。厳選された韓国コスメで、あなたの理想の肌を叶えます。"
        },
        phases: ["STEP 01: カテゴリー", "STEP 02: お悩み解決", "あなたへの推奨ルーティン"],
        instructions: ["ケアカテゴリーを選択してください", "具体的なお悩みをお聞かせください", "お悩みに合わせた最適な製品をご提案いたします："]
    },
    [Language.FR]: {
        start: "COMMENCER LE DIAGNOSTIC",
        next: "SUIVANT",
        back: "RETOUR",
        reset: "RÉINITIALISER",
        buyingLink: "ACHETER EN LIGNE",
        brandFile: "DOSSIER MARQUE",
        catalog: "TÉLÉCHARGER LE CATALOGUE",
        contact: "NOUS CONTACTER",
        b2b: "B2B & PARTENARIAT EXPORT",
        sidebar: ["ACCUEIL", "CATÉGORIES", "BESOINS", "RÉSULTATS"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "CURATION\nDE BEAUTÉ\nEXPERTE.",
            desc: "L'excellence de la K-Beauty au service de votre peau à travers nos marques premium."
        },
        phases: ["ÉTAPE 01 : Focus", "ÉTAPE 02 : Besoins", "Votre Routine Idéale"],
        instructions: ["Choisissez votre catégorie de soin", "Identifiez votre besoin spécifique", "Voici notre sélection de soins experts adaptée à votre profil :"]
    },
    [Language.DE]: {
        start: "DIAGNOSE STARTEN",
        next: "WEITER",
        back: "ZURÜCK",
        reset: "NEUSTART",
        buyingLink: "DIREKT ZUM SHOP",
        brandFile: "MARKEN-GUIDE",
        catalog: "KATALOG DOWNLOAD",
        contact: "KONTAKT",
        b2b: "B2B & GLOBAL PARTNERSCHAFT",
        sidebar: ["HOME", "PFLEGEFOKUS", "ANLIEGEN", "EMPFEHLUNG"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nKURATION.",
            desc: "Erleben Sie die Synergie unserer Hochleistungsmarken für ein vollendetes Hautbild."
        },
        phases: ["SCHRITT 01: Fokus", "SCHRITT 02: Anliegen", "Ihre Pflegeroutine"],
        instructions: ["Wählen Sie einen Pflegebereich", "Welches Hautbedürfnis steht im Fokus?", "Diese Produkte wurden speziell für Ihr Profil ausgewählt:"]
    },
    [Language.KR]: {
        start: "진단 시작하기",
        next: "다음",
        back: "이전",
        reset: "초기화",
        buyingLink: "구매하기",
        brandFile: "브랜드 소개서",
        catalog: "카탈로그 다운로드",
        contact: "CONTACT",
        b2b: "B2B 및 글로벌 파트너십",
        sidebar: ["홈", "카테고리", "피부 고민", "추천 결과"],
        hero: {
            sub: "(주)코스메랩",
            title: "코스메랩\n프리미엄\n큐레이션.",
            desc: "베리썸, G9SKIN, 아밀, 코스셀. 엄선된 4대 K-뷰티 브랜드의 시너지를 경험하세요."
        },
        phases: ["STEP 01: 집중 케어", "STEP 02: 피부 고민", "맞춤 솔루션"],
        instructions: ["가장 관심 있는 케어 분야를 선택해주세요", "현재 가장 큰 피부 고민은 무엇인가요?", "고객님의 피부 타입에 최적화된 솔루션을 제안합니다:"]
    },
    [Language.CN]: {
        start: "开始诊断",
        next: "下一步",
        back: "返回",
        reset: "重置",
        buyingLink: "立即购买",
        brandFile: "品牌介绍文件",
        catalog: "下载目录",
        contact: "联系我们",
        b2b: "B2B与全球合作",
        hero: {
            sub: "CosmeLab有限公司",
            title: "COSMELAB\n严选\n护肤方案",
            desc: "体验Berrisom, G9SKIN, AMILL, COSCELL四大K-Beauty品牌的协同效应。"
        },
        sidebar: ["首页", "护理重点", "肌肤困扰", "推荐结果"],
        phases: ["第一步：重点护理", "第二步：肌肤困扰", "您的专属方案"],
        instructions: ["请选择您最关注的护理类别", "请确认您的主要肌肤困扰", "为您精心挑选的护肤方案如下："]
    },
    [Language.RU]: {
        start: "НАЧАТЬ ДИАГНОСТИКУ",
        next: "ДАЛЕЕ",
        back: "НАЗАД",
        reset: "СБРОС",
        buyingLink: "КУПИТЬ ОНЛАЙН",
        brandFile: "ФАЙЛ О БРЕНДЕ",
        catalog: "СКАЧАТЬ КАТАЛОГ",
        contact: "КОНТАКТЫ",
        b2b: "B2B ПАРТНЕРСТВО",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nПРЕМИУМ\nУХОД.",
            desc: "Откройте синергию лучших брендов K-Beauty: Berrisom, G9SKIN, AMILL и COSCELL."
        },
        sidebar: ["ГЛАВНАЯ", "УХОД", "ПРОБЛЕМЫ", "РЕШЕНИЕ"],
        phases: ["ЭТАП 01: Фокус", "ЭТАП 02: Проблема", "Ваш уход"],
        instructions: ["Выберите категорию ухода", "Какая у вас основная проблема кожи?", "Мы подобрали эти продукты для вас:"]
    },
    [Language.EL]: {
        start: "ΕΝΑΡΞΗ",
        next: "ΕΠΟΜΕΝΟ",
        back: "ΠΙΣΩ",
        reset: "ΕΠΑΝΑΦΟΡΑ",
        buyingLink: "ΑΓΟΡΑ ΤΩΡΑ",
        brandFile: "ΑΡΧΕΙΟ ΜΑΡΚΑΣ",
        catalog: "ΛΗΨΗ ΚΑΤΑΛΟΓΟΥ",
        contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
        b2b: "ΣΥΝΕΡΓΑΣΙΑ B2B",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nΦΡΟΝΤΙΔΑ.",
            desc: "Ζήστε τη συνέργεια των κορυφαίων μαρκών K-Beauty: Berrisom, G9SKIN, AMILL και COSCELL."
        },
        sidebar: ["ΑΡΧΙΚΗ", "ΦΡΟΝΤΙΔΑ", "ΑΝΑΓΚΕΣ", "ΠΡΟΤΑΣΗ"],
        phases: ["ΒΗΜΑ 01: Κατηγορία", "ΒΗΜΑ 02: Ανάγκη", "Η Πρότασή μας"],
        instructions: ["Επιλέξτε μια κατηγορία φροντίδας", "Ποια είναι η κύρια ανάγκη της επιδερμίδας σας;", "Επιλέξαμε αυτά τα προϊόντα για εσάς:"]
    }
};

export const CATEGORIES: CategoryData[] = [
    {
        id: Category.MAKEUP,
        title: 'Makeup Tattoo',
        subtitle: 'Berrisom: Professional Long-wear Solutions',
        brand: 'BERRISOM',
        imageUrl: getDriveUrl('1Ru1sWVXPcx5xk5Tccjf5c7FlkV-sl_eb'),
        translations: {
            [Language.ES]: { title: 'Maquillaje Tattoo', subtitle: 'Berrisom: Soluciones profesionales de larga duración' },
            [Language.JP]: { title: 'タトゥーメイク', subtitle: 'Berrisom: プロ仕様の持続力' },
            [Language.ME]: { title: 'تاتو المكياج', subtitle: 'بيريسوم: حلول احترافية تدوم طويلاً' },
            [Language.FR]: { title: 'Maquillage Tattoo', subtitle: 'Berrisom : Haute tenue professionnelle' },
            [Language.DE]: { title: 'Make-up-Tattoo', subtitle: 'Berrisom: Professionelle Langzeit-Lösungen' },
            [Language.KR]: { title: '메이크업 타투', subtitle: 'Berrisom: 지속력 끝판왕, 프로페셔널 솔루션' },
            [Language.CN]: { title: '纹身彩妆', subtitle: 'Berrisom: 持久专业的彩妆方案' }
        },
        options: [
            {
                id: 'lip', label: 'Lip Care', sub: 'Long-lasting tattoo lip tints',
                translations: {
                    [Language.ES]: { label: 'Cuidado Labial', sub: 'Tintes tattoo de color inalterable' },
                    [Language.JP]: { label: 'リップケア', sub: '塗りたての鮮やかさが続くティント' },
                    [Language.ME]: { label: 'العناية بالشفاه', sub: 'صبغات شفاه تاتو تدوم طويلاً' },
                    [Language.FR]: { label: 'Soin des Lèvres', sub: 'Encres à lèvres tattoo longue durée' },
                    [Language.DE]: { label: 'Lippenpflege', sub: 'Langanhaltende Lippen-Tattoos' },
                    [Language.KR]: { label: '립 케어', sub: '하루 종일 생생한 롱래스팅 틴트' },
                    [Language.CN]: { label: '唇部护理', sub: '超长持久纹身唇彩' }
                }
            },
            {
                id: 'eyebrow', label: 'Eyebrow Care', sub: '8-day lasting natural definition',
                translations: {
                    [Language.ES]: { label: 'Cejas Perfectas', sub: 'Definición natural que dura hasta 8 días' },
                    [Language.JP]: { label: 'アイブロウケア', sub: '8日間美しさをキープするタトゥー眉' },
                    [Language.ME]: { label: 'العناية بالحواجب', sub: 'تحديد طبيعي يدوم لمدة 8 أيام' },
                    [Language.FR]: { label: 'Sourcils', sub: 'Définition naturelle tenue 8 jours' },
                    [Language.DE]: { label: 'Brauenpflege', sub: '8 Tage langanhaltende Definition' },
                    [Language.KR]: { label: '아이브로우', sub: '최대 8일 지속, 자연스러운 눈썹 타투' },
                    [Language.CN]: { label: '眉部护理', sub: '8天持久自然眉妆' }
                }
            },
            {
                id: 'shading', label: 'Shading Tattoo', sub: '7-day lasting 3D contouring',
                translations: {
                    [Language.ES]: { label: 'Contorno 3D', sub: 'Esculpido facial de 7 días de duración' },
                    [Language.JP]: { label: 'シェーディング', sub: '理想の陰影メイクをデザイン。7日間持続する３D立体メイク。' },
                    [Language.ME]: { label: 'تاتو التظليل', sub: 'تحديد ثلاثي الأبعاد يدوم 7 أيام' },
                    [Language.FR]: { label: 'Contouring 3D', sub: 'Sculptage du visage tenue 7 jours' },
                    [Language.DE]: { label: 'Konturierung', sub: '7 Tage anhaltendes 3D-Shading' },
                    [Language.KR]: { label: '쉐딩 타투', sub: '7일 지속 3D 윤곽 메이크업' },
                    [Language.CN]: { label: '修容纹身', sub: '7天持久立体修容' }
                }
            }
        ]
    },
    {
        id: Category.SKINCARE,
        title: 'Skincare',
        subtitle: 'G9SKIN: Signature Milk & Hydration',
        brand: 'G9SKIN',
        imageUrl: getDriveUrl('16_05uAEWUepmP871kUafYMyHqAAckvbB'),
        translations: {
            [Language.ES]: { title: 'Cuidado Facial', subtitle: 'G9SKIN: Hidratación con extractos de leche' },
            [Language.JP]: { title: 'スキンケア', subtitle: 'G9SKIN: 牛乳タンパク質で弾む潤い肌' },
            [Language.ME]: { title: 'العناية بالبشرة', subtitle: 'جي ناين سكين: ترطيب الحليب الفاخر' },
            [Language.FR]: { title: 'Soins Visage', subtitle: 'G9SKIN : Hydratation signature au lait' },
            [Language.DE]: { title: 'Hautpflege', subtitle: 'G9SKIN: Feuchtigkeit mit Milchproteinen' },
            [Language.KR]: { title: '스킨케어', subtitle: 'G9SKIN: 우유 단백질로 완성하는 촉촉한 피부' },
            [Language.CN]: { title: '护肤', subtitle: 'G9SKIN: 牛奶蛋白保湿护理' }
        },
        options: [
            {
                id: 'toneup', label: 'Tone-up Care', sub: 'Instant brightening cream',
                translations: {
                    [Language.ES]: { label: 'Efecto Iluminador', sub: 'Crema aclarante con brillo instantáneo' },
                    [Language.JP]: { label: 'トーンアップ', sub: '透明感あふれる美白美肌へ' },
                    [Language.ME]: { label: 'تفتيح فوري', sub: 'كريم إشراقة وتفتيح فوري' },
                    [Language.FR]: { label: 'Éclat du Teint', sub: 'Crème illuminatrice instantanée' },
                    [Language.DE]: { label: 'Tone-up Pflege', sub: 'Sofortige Leuchtkraft-Creme' },
                    [Language.KR]: { label: '톤업 케어', sub: '즉각적인 화이트닝 & 톤업 효과' },
                    [Language.CN]: { label: '提亮护理', sub: '瞬间提亮美白霜' }
                }
            },
            {
                id: 'moisture', label: 'Moisture Care', sub: 'Deep hydration care',
                translations: {
                    [Language.ES]: { label: 'Hidratación Extrema', sub: 'Nutrición intensa para pieles secas' },
                    [Language.JP]: { label: '高保湿ケア', sub: '深部まで潤いを届ける水分補給' },
                    [Language.ME]: { label: 'الترطيب العميق', sub: 'عناية فائقة لترطيب البشرة' },
                    [Language.FR]: { label: 'Hydratation', sub: 'Soin hydratant intense' },
                    [Language.DE]: { label: 'Feuchtigkeitskur', sub: 'Tiefenwirksame Feuchtigkeitspflege' },
                    [Language.KR]: { label: '수분 케어', sub: '피부 깊숙이 채워지는 강력한 보습' },
                    [Language.CN]: { label: '保湿护理', sub: '深层补水保湿' }
                }
            },
            {
                id: 'mask', label: 'Mask Care', sub: 'Professional aesthetic masks',
                translations: {
                    [Language.ES]: { label: 'Mascarillas', sub: 'Tratamientos estéticos profesionales en casa' },
                    [Language.JP]: { label: 'マスクパック', sub: '自宅でできる本格エステ級ケア' },
                    [Language.ME]: { label: 'أقنعة الجمال', sub: 'أقنعة احترافية للعناية الفائقة' },
                    [Language.FR]: { label: 'Masques Soins', sub: 'Soins esthétiques professionnels' },
                    [Language.DE]: { label: 'Maskenpflege', sub: 'Professionelle Wirkstoffmasken' },
                    [Language.KR]: { label: '마스크 케어', sub: '집에서 즐기는 에스테틱 홈케어' },
                    [Language.CN]: { label: '面膜护理', sub: '专业美容院级面膜' }
                }
            }
        ]
    },
    {
        id: Category.CLEANSING,
        title: 'Deep Cleansing',
        subtitle: 'AMILL: Super Grain Purification',
        brand: 'AMILL',
        imageUrl: getDriveUrl('1sglXdGWlpQQPCYVo1euIyTSjTGnSlKG6'),
        translations: {
            [Language.ES]: { title: 'Limpieza Profunda', subtitle: 'AMILL: Purificación con granos naturales' },
            [Language.JP]: { title: 'クレンジング', subtitle: 'AMILL: 穀物成分で毛穴までクリアに' },
            [Language.ME]: { title: 'التنظيف العميق', subtitle: 'أميل: تنقية بخلاصة الحبوب الفائقة' },
            [Language.FR]: { title: 'Nettoyage Profond', subtitle: 'AMILL : Purification aux super-grains' },
            [Language.DE]: { title: 'Tiefenreinigung', subtitle: 'AMILL: Reinigung mit Getreideextrakten' },
            [Language.KR]: { title: '딥 클렌징', subtitle: 'AMILL: 곡물 에너지로 맑고 깨끗하게' },
            [Language.CN]: { title: '深层清洁', subtitle: 'AMILL: 超级谷物净化' }
        },
        options: [
            {
                id: 'bubble', label: 'Foam Type', sub: 'Creamy grain cleansing foam',
                translations: {
                    [Language.ES]: { label: 'Limpiador en Espuma', sub: 'Espuma cremosa a base de granos' },
                    [Language.JP]: { label: 'フォーム洗顔', sub: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
                    [Language.ME]: { label: 'المنظف الرغوي', sub: 'رغوة كريمية منظفة بالحبوب' },
                    [Language.FR]: { label: 'Mousse Nettoyante', sub: 'Mousse onctueuse aux céréales' },
                    [Language.DE]: { label: 'Reinigungsschaum', sub: 'Cremiger Schaum mit Getreide' },
                    [Language.KR]: { label: '폼 클렌징', sub: '부드러운 곡물 거품 세안' },
                    [Language.CN]: { label: '泡沫洁面', sub: '柔滑谷物洁面泡沫' }
                }
            },
            {
                id: 'oil', label: 'Oil Product', sub: 'Mild rice cleansing oil',
                translations: {
                    [Language.ES]: { label: 'Aceite Limpiador', sub: 'Fórmula suave con extracto de arroz' },
                    [Language.JP]: { label: 'オイル洗顔', sub: '米ぬかオイルで優しくメイクオフ' },
                    [Language.ME]: { label: 'المنظف الزيتي', sub: 'زيت تنظيف الأرز اللطيف' },
                    [Language.FR]: { label: 'Huile Nettoyante', sub: 'Démaquillant doux à l\'huile de riz' },
                    [Language.DE]: { label: 'Reinigungsöl', sub: 'Mildes Öl mit Reisextrakten' },
                    [Language.KR]: { label: '오일 클렌징', sub: '순한 쌀겨 오일 클렌징' },
                    [Language.CN]: { label: '卸妆油', sub: '温和米糠卸妆油' }
                }
            }
        ]
    },
    {
        id: Category.ANTI_AGING,
        title: 'Anti-Aging',
        subtitle: 'COSCELL: Clinical Grade Repair',
        brand: 'COSCELL',
        imageUrl: getDriveUrl('10uzxPYnCxkTN_Tc3EDCRUa9CaeFKkLcU'),
        translations: {
            [Language.ES]: { title: 'Anti-Edad', subtitle: 'COSCELL: Reparación avanzada de grado clínico' },
            [Language.JP]: { title: 'COSCELL:クリニック品質の高機能スキンケア', subtitle: 'COSCELL: クリニック品質の細胞修復' },
            [Language.ME]: { title: 'مكافحة الشيخوخة', subtitle: 'كوزسيل: إصلاح خلوي طبي متطور' },
            [Language.FR]: { title: 'Anti-Âge', subtitle: 'COSCELL : Réparation clinique avancée' },
            [Language.DE]: { title: 'Anti-Aging', subtitle: 'COSCELL: Klinische Zellreparatur' },
            [Language.KR]: { title: '안티에이징', subtitle: 'COSCELL: 전문가급 리페어 솔루션' },
            [Language.CN]: { title: '抗衰老', subtitle: 'COSCELL: 临床级修复护理' }
        },
        options: [
            {
                id: 'wrinkle_eye', label: 'Eye Bag Care', sub: 'Retinol eye treatment',
                translations: {
                    [Language.ES]: { label: 'Contorno de Ojos', sub: 'Tratamiento intensivo con retinol' },
                    [Language.JP]: { label: 'レチノールボリュームアイバッグクリーム', sub: '1分で目元の印象を変化させる。シワを目立ちにくくし、ハリを与えるアイバッグクリーム。' },
                    [Language.ME]: { label: 'الهالات والتجاعيد', sub: 'علاج الريتينول لمنطقة العين' },
                    [Language.FR]: { label: 'Contour des Yeux', sub: 'Soin ciblé au rétinol' },
                    [Language.DE]: { label: 'Augenpflege', sub: 'Retinol-Intensivkur' },
                    [Language.KR]: { label: '아이백 케어', sub: '레티놀 집중 아이 트리트먼트' },
                    [Language.CN]: { label: '眼袋护理', sub: '视黄醇眼部护理' }
                }
            },
            {
                id: 'wrinkle_neck', label: 'Neck Care', sub: 'Restoring firmness in 1 min',
                translations: {
                    [Language.ES]: { label: 'Cuidado del Cuello', sub: 'Firmeza recuperada en 60 segundos' },
                    [Language.JP]: { label: 'ネックケア', sub: '1分でハリを取り戻す即効性ケア' },
                    [Language.ME]: { label: 'عناية الرقبة', sub: 'شد فوري خلال دقيقة واحدة' },
                    [Language.FR]: { label: 'Soin du Cou', sub: 'Restaure la fermeté en 1 min' },
                    [Language.DE]: { label: 'Halspflege', sub: 'Straffung in nur 1 Minute' },
                    [Language.KR]: { label: '넥 케어', sub: '1분 만에 되찾는 목주름 탄력' },
                    [Language.CN]: { label: '颈部护理', sub: '1分钟紧致修复' }
                }
            },
            {
                id: 'serum_care', label: 'Serum Care', sub: 'Galvanic & Retinol treatment',
                translations: {
                    [Language.ES]: { label: 'Sérum Especializado', sub: 'Tratamiento galvánico con retinol' },
                    [Language.JP]: { label: '美容液セラム', sub: '最先端レチノール成分で集中補修' },
                    [Language.ME]: { label: 'سيروم علاجي', sub: 'علاج الجلفانيك والريتينول' },
                    [Language.FR]: { label: 'Sérum Expert', sub: 'Traitement galvanique au rétinol' },
                    [Language.DE]: { label: 'Serumpflege', sub: 'Galvanik- & Retinol-Kur' },
                    [Language.KR]: { label: '세럼 케어', sub: '갈바닉 & 레티놀 더블 케어' },
                    [Language.CN]: { label: '精华护理', sub: '电离子视黄醇护理' }
                }
            },
            {
                id: 'green_papaya', label: 'Green Papaya Line', sub: 'PDRN pore care line',
                translations: {
                    [Language.ES]: { label: 'Gama Papaya Verde', sub: 'Cuidado de poros con PDRN' },
                    [Language.JP]: { label: 'グリーンパパイヤPDRNライン', sub: 'PDRN配合の次世代毛穴ケア' },
                    [Language.ME]: { label: 'مجموعة البابايا', sub: 'عناية المسام بتقنية PDRN' },
                    [Language.FR]: { label: 'Gamme Papaye Verte', sub: 'Soin des pores au PDRN' },
                    [Language.DE]: { label: 'Grüne Papaya-Linie', sub: 'Poren-Care mit PDRN' },
                    [Language.KR]: { label: '그린 파파야 라인', sub: 'PDRN 모공 집중 케어' },
                    [Language.CN]: { label: '青木瓜系列', sub: 'PDRN毛孔护理系列' }
                }
            },
            {
                id: 'vita_line', label: 'VITA LINE', sub: 'Vitamin C 99% capsule line',
                translations: {
                    [Language.ES]: { label: 'Gama VITA', sub: 'Vitamina C pura al 99% en cápsulas' },
                    [Language.JP]: { label: 'しみ・くすみビタミンケア', sub: '純度99%のビタミンCカプセル' },
                    [Language.ME]: { label: 'مجموعة فيتا', sub: 'كبسولات فيتامين سي النقي' },
                    [Language.FR]: { label: 'Ligne VITA', sub: 'Vitamine C pure à 99% en capsules' },
                    [Language.DE]: { label: 'VITA-LINIE', sub: '99% reine Vitamin-C-Kapseln' },
                    [Language.KR]: { label: '비타 라인', sub: '순수 비타민 C 99% 캡슐 라인' },
                    [Language.CN]: { label: '维他命系列', sub: '99%纯维生素C胶囊系列' }
                }
            }
        ]
    }
];

export const PRODUCTS: Product[] = [
    {
        id: 'berrisom-lip-original',
        brand: 'BERRISOM',
        name: 'LIP TATTOO TINT PACK',
        description: 'The iconic peel-off tint. Ensures vibrant color for 32 hours with zero transfer.',
        imageUrl: getDriveUrl('1Ru1sWVXPcx5xk5Tccjf5c7FlkV-sl_eb'),
        subNeed: ['lip'],
        tags: ['32H', 'Iconic'],
        translations: {
            [Language.ES]: { name: 'LIP TATTOO TINT PACK', description: 'El tinte labial peel-off original. Color vibrante durante 32 horas sin manchas.' },
            [Language.JP]: { name: 'リップタトゥーパック', description: '世界中で愛される元祖「剥がすリップ」。32時間塗りたての色をキープ。' },
            [Language.ME]: { name: 'تاتو الشفاه الأصلي', description: 'أول صبغة شفاه قابلة للتقشير. تضمن لونًا حيويًا لمدة 32 ساعة دون تلطيخ.' },
            [Language.FR]: { name: 'LIP TATTOO TINT PACK', description: "L'emblématique tattoo à lèvres pelable. Couleur vibrante 32h sans transfert." },
            [Language.DE]: { name: 'LIP TATTOO TINT PACK', description: 'Die weltweit erste abziehbare Lippentönung. Hält 32 Stunden ohne abzufärben.' }
        }
    },
    {
        id: 'berrisom-jelly',
        brand: 'BERRISOM',
        name: 'JELLY TATTOO TINT',
        description: 'A glossy peel-off tint pack that provides vivid color with a comfortable jelly finish.',
        imageUrl: getDriveUrl('1GHrHm5azvpvSrJs18prGj62o1ZdxU1yc'),
        subNeed: ['lip'],
        tags: ['Glossy', 'Comfort'],
        translations: {
            [Language.ES]: { name: 'JELLY TATTOO TINT', description: 'Tinte peel-off con textura gelatina para un color intenso y labios hidratados.' },
            [Language.JP]: { name: 'ジェリータトゥーティント', description: 'ぷるんとしたジェリーのような質感。鮮やかな発色と潤いが持続します。' },
            [Language.ME]: { name: 'jiلي تاتو تينت', description: 'صبغة شفاه جيلي قابلة للتقشير بلون غني وملمس مريح.' },
            [Language.FR]: { name: 'JELLY TATTOO TINT', description: 'Tattoo à lèvres pelable au fini gelée pour une couleur éclatante.' },
            [Language.DE]: { name: 'JELLY TATTOO TINT', description: 'Ein abziehbares Lippen-Tattoo mit lebendigen Farben und geschmeidigem Jelly-Finish.' }
        }
    },
    {
        id: 'berrisom-eyebrow',
        brand: 'BERRISOM',
        name: 'OOPS MY BROW TATTOO',
        description: 'A professional brow solution that lasts for up to 8 days with a natural look.',
        imageUrl: getDriveUrl('1rW5IXV3lFCDXw_ux8ent3Q1FJKEXIAS8'),
        subNeed: ['eyebrow'],
        tags: ['8-Day', 'Natural'],
        translations: {
            [Language.ES]: { name: 'OOPS MY BROW TATTOO', description: 'Cejas perfectas hasta por 8 días. Definición natural de nivel profesional.' },
            [Language.JP]: { name: 'アイブロウタトゥー', description: '最長8日間持続。毎朝のメイクを楽にする、自然な仕上がりの眉タトゥー。' },
            [Language.ME]: { name: 'تاتو الحواجب أوبس', description: 'حل احترافي للحواجب يدوم حتى 8 أيام بمظهر طبيعي للغاية.' },
            [Language.FR]: { name: 'OOPS MY BROW TATTOO', description: 'Teinture sourcils professionnelle tenue 8 jours, fini naturel.' },
            [Language.DE]: { name: 'OOPS MY BROW TATTOO', description: 'Professionelles Augenbrauen-Tattoo für ein natürliches Aussehen, hält bis zu 8 Tage.' }
        }
    },
    {
        id: 'berrisom-shading',
        brand: 'BERRISOM',
        name: 'SHADING TATTOO',
        description: 'Define and sculpt your facial contours with a precise, long-lasting 3D finish.',
        imageUrl: getDriveUrl('1XRprARVP6wHaLPaIKZ6So_KYE0vtbppH'),
        subNeed: ['shading'],
        tags: ['3D Sculp', '7-Day'],
        translations: {
            [Language.ES]: { name: 'SHADING TATTOO', description: 'Define y esculpe el rostro con un acabado 3D impecable y duradero.' },
            [Language.JP]: { name: 'シェーディングタトゥー', description: '理想の陰影メイクをデザイン。7日間持続する３D立体メイク。' },
            [Language.ME]: { name: 'تاتو التظليل', description: 'حدد ونحت ملامح الوجه بلمسة ثلاثية الأبعاد تدوم طويلاً.' },
            [Language.FR]: { name: 'SHADING TATTOO', description: 'Définissez et sculptez vos contours pour un fini 3D durable.' },
            [Language.DE]: { name: 'SHADING TATTOO', description: 'Definieren und modellieren Sie Ihre Gesichtskonturen mit langanhaltendem 3D-Finish.' }
        }
    },
    {
        id: 'g9-whipping',
        brand: 'G9SKIN',
        name: 'WHITE IN WHIPPING CREAM',
        description: 'Instant tone-up cream infused with milk protein for a radiant glow.',
        imageUrl: getDriveUrl('16_05uAEWUepmP871kUafYMyHqAAckvbB'),
        subNeed: ['toneup'],
        tags: ['Glow', 'Milk'],
        translations: {
            [Language.ES]: { name: 'WHITE IN WHIPPING CREAM', description: 'Crema iluminadora con proteínas de leche para una piel radiante al instante.' },
            [Language.JP]: { name: 'ホワイトホイップクリーム', description: '牛乳タンパク質配合。一塗りでワントーン明るい透明肌를演出します。' },
            [Language.ME]: { name: 'كريم ويبينج للتفتيح', description: 'كريم تفتيح فوري مع بروتين الحليب لإشراقة طبيعية.' },
            [Language.FR]: { name: 'WHITE IN WHIPPING CREAM', description: 'Crème éclat instantanée aux protéines de lait pour un teint radieux.' },
            [Language.DE]: { name: 'WHITE WHIPPING CREAM', description: 'Sofort-Aufhellungscreme mit Milchproteinen für einen strahlenden Glow.' }
        }
    },
    {
        id: 'g9-moisture',
        brand: 'G9SKIN',
        name: 'WHITE IN MOISTURE CREAM',
        description: 'A deep hydration cream that nourishes and brightens the skin from within.',
        imageUrl: getDriveUrl('11LMxQ8w-EXI8Gg036s4ejllrOEIZGX5P'),
        subNeed: ['moisture'],
        tags: ['Hydrate', 'Radiant'],
        translations: {
            [Language.ES]: { name: 'WHITE IN MOISTURE CREAM', description: 'Crema hidratante profunda que nutre e ilumina desde el interior.' },
            [Language.JP]: { name: 'モイスチャークリーム', description: '深い潤いを与え、内側から輝くようなツヤ肌へ導く高保湿クリーム。' },
            [Language.ME]: { name: 'كريم الترطيب وايت', description: 'كريم ترطيب عميق يغذي البشرة ويفتحها من الداخل.' },
            [Language.FR]: { name: 'WHITE IN MOISTURE CREAM', description: 'Crème hydratante profonde pour une peau nourrie et lumineuse.' },
            [Language.DE]: { name: 'WHITE MOISTURE CREAM', description: 'Intensive Feuchtigkeitspflege, die die Haut nährt und zum Strahlen bringt.' }
        }
    },
    {
        id: 'g9-mask',
        brand: 'G9SKIN',
        name: 'SELF AESTHETIC MASK',
        description: 'Specialized aesthetic masks for targeted care of every body part.',
        imageUrl: getDriveUrl('1RRo3FBbWsTrSnue-CqwQD44ZWpv3oxty'),
        subNeed: ['mask'],
        tags: ['Aesthetic', 'Total'],
        translations: {
            [Language.ES]: { name: 'SELF AESTHETIC MASK', description: 'Mascarillas especializadas para el cuidado integral de cada parte del cuerpo.' },
            [Language.JP]: { name: 'セルフエステマスク', description: '全身を磨き上げる部位別専門マスク。おうちで本格エステ。' },
            [Language.ME]: { name: 'أقنعة سيلف إستيتيك', description: 'أقنعة جمالية متخصصة للعناية بكل جزء من الجسم.' },
            [Language.FR]: { name: 'SELF AESTHETIC MASQUE', description: 'Masques esthétiques experts pour chaque zone du corps.' },
            [Language.DE]: { name: 'SELF AESTHETIC MASKE', description: 'Spezialisierte Wirkstoffmasken für die gezielte Pflege jeder Körperpartie.' }
        }
    },
    {
        id: 'amill-oil',
        brand: 'AMILL',
        name: 'AMILL CLEANSING OIL',
        description: 'Mild cleansing oil with Korean Rice to gently remove makeup and impurities.',
        imageUrl: getDriveUrl('1sglXdGWlpQQPCYVo1euIyTSjTGnSlKG6'),
        subNeed: ['oil'],
        tags: ['Rice', 'Clean'],
        translations: {
            [Language.ES]: { name: 'AMILL CLEANSING OIL', description: 'Aceite de arroz coreano que elimina el maquillaje con máxima suavidad.' },
            [Language.JP]: { name: 'クレンジングオイル', description: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
            [Language.ME]: { name: 'زيت تنظيف أميل', description: 'زيت تنظيف الأرز الكوري اللطيف لإزالة المكياج والشوائب.' },
            [Language.FR]: { name: 'HUILE NETTOYANTE AMILL', description: "Huile démaquillante au riz coréen pour un nettoyage en douceur." },
            [Language.DE]: { name: 'AMILL REINIGUNGSÖL', description: 'Mildes Reinigungsöl mit koreanischem Reis zur sanften Entfernung von Unreinheiten.' }
        }
    },
    {
        id: 'amill-foam',
        brand: 'AMILL',
        name: 'AMILL CLEANSING FOAM',
        description: 'A creamy grain-based foam that purifies pores without stripping moisture.',
        imageUrl: getDriveUrl('1oDqkAmw147FUc2Xg1Ena-DsKxP9pU5I-'),
        subNeed: ['bubble'],
        tags: ['Purify', 'Creamy'],
        translations: {
            [Language.ES]: { name: 'AMILL CLEANSING FOAM', description: 'Limpiador cremoso que purifica los poros respetando la hidratación natural.' },
            [Language.JP]: { name: 'クレンジングフォーム', description: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
            [Language.ME]: { name: 'رغوة تنظيف أميل', description: 'رغوة كريمية منظفة تنقي المسام وتحافظ على رطوبة البشرة.' },
            [Language.FR]: { name: 'MOUSSE NETTOYANTE AMILL', description: 'Nettoyant onctueux aux grains pour purifier sans dessécher.' },
            [Language.DE]: { name: 'AMILL REINIGUNGSSCHAUM', description: 'Cremiger Reinigungsschaum auf Getreidebasis für porentiefe Reinheit.' }
        }
    },
    {
        id: 'amill-bubble',
        brand: 'AMILL',
        name: 'AMILL BUBBLE FOAM',
        description: 'Instant micro-bubble cleanser for a thorough grain-based purification.',
        imageUrl: getDriveUrl('1lutIEojWdHDva3BqQVvXJmA4YCq2E3Sm'),
        subNeed: ['bubble'],
        tags: ['MicroBubble', 'Grain'],
        translations: {
            [Language.ES]: { name: 'AMILL BUBBLE FOAM', description: 'Microburbujas instantáneas para una limpieza profunda y calmante.' },
            [Language.JP]: { name: 'バブルフォーム', description: 'ワンプッシュで極細泡。穀物の力で毛穴の奥までクレンジング。' },
            [Language.ME]: { name: 'رغوة فقاعية منظفة', description: 'منظف فقاعي فوري لتنقية البشرة بالحبوب بعمق.' },
            [Language.FR]: { name: 'AMILL BUBBLE FOAM', description: 'Micro-bulles instantanées pour une purification aux céréales.' },
            [Language.DE]: { name: 'AMILL BUBBLE FOAM', description: 'Mikroblasen-Reiniger für eine sanfte und gründliche Reinigung.' }
        }
    },
    {
        id: 'coscell-eye',
        brand: 'COSCELL',
        name: 'RETINOL EYEBAG CREAM',
        description: 'Instant wrinkle reduction and lifting effect for the under-eye area in 1 min.',
        imageUrl: getDriveUrl('1wqzQKpP9ufrkpsYyhTW2ROtzNqG-WbdY'),
        subNeed: ['wrinkle_eye'],
        tags: ['Retinol', 'Instant'],
        translations: {
            [Language.ES]: { name: 'CREMA RETINOL OJOS', description: 'Efecto lifting inmediato. Reduce arrugas y bolsas en solo 1 minuto.' },
            [Language.JP]: { name: 'レチノールボリュームアイバッククリーム', description: '1分で目元の印象を変化させる。シワを目立ちにくくし、ハリを与えるアイバッグクリーム。' },
            [Language.ME]: { name: 'كريم الريتينول للعين', description: 'تقليل فوري للتجاعيد وشد منطقة تحت العين في دقيقة واحدة.' },
            [Language.FR]: { name: 'CRÈME RÉTINOL YEUX', description: 'Réduction des rides et effet lifting instantané en 1 min.' },
            [Language.DE]: { name: 'RETINOL AUGENCREME', description: 'Sofortige Faltenminderung und Lifting-Effekt für die Augenpartie in nur 1 Minute.' }
        }
    },
    {
        id: 'coscell-neck',
        brand: 'COSCELL',
        name: 'RETINO VOLUME NECK CREAM',
        description: 'Restores firmness and smooths neck wrinkles with rapid-action retinol.',
        imageUrl: getDriveUrl('1-8krAOeFH7UONpmzLkXnn6gnRJRdU7Dh'),
        subNeed: ['wrinkle_neck'],
        tags: ['NeckCare', 'Firming'],
        translations: {
            [Language.ES]: { name: 'CREMA DE CUELLO RETINO', description: 'Trata las arrugas del cuello y recupera la firmeza perdida al instante.' },
            [Language.JP]: { name: 'ネックボリュームクリーム', description: '年齢の出やすい首元のシワに集中アプローチ。1分でピンとしたハリを実現。' },
            [Language.ME]: { name: 'كريم الرقبة ريتينو', description: 'يستهدف تجاعيد الرقبة ويعيد إليها مرونتها وشدها بفاعلية.' },
            [Language.FR]: { name: 'CRÈME COU RÉTINOL', description: 'Lisse les rides du cou et restaure la fermeté de la peau.' },
            [Language.DE]: { name: 'RETINO HALSCREME', description: 'Strafft die Halspartie und glättet Fältchen mit hochwirksamem Retinol.' }
        }
    },
    {
        id: 'coscell-serum',
        brand: 'COSCELL',
        name: 'RETINO GALVANIC SERUM 100',
        description: 'Clinical grade retinol serum with a galvanic finish for maximum absorption.',
        imageUrl: getDriveUrl('1Mb1ec7Dx1ZnXjlgZejBJ0ugmiHcdW6oT'),
        subNeed: ['serum_care'],
        tags: ['Galvanic', 'Advanced'],
        translations: {
            [Language.ES]: { name: 'RETINO GALVANIC SERUM', description: 'Sérum de retinol clínico con acabado galvánico para absorción total.' },
            [Language.JP]: { name: 'ガルバニックセラム', description: '美容成分を肌の奥まで届ける。レチノールを高配合した次世代セラム。' },
            [Language.ME]: { name: 'سيروم ريتينو جالفانيك', description: 'سيروم ريتينول طبي مطور مع تقنية الجلفانيك لامتصاص أقصى.' },
            [Language.FR]: { name: 'SÉRUM GALVANIQUE RÉTINOL', description: 'Sérum rétinol haute performance pour une fermeté absolue.' },
            [Language.DE]: { name: 'RETINO GALVANIK SERUM', description: 'Klinisch reines Retinol-Serum mit Galvanik-Technologie für maximale Aufnahme.' }
        }
    },
    {
        id: 'coscell-papaya-ampoule',
        brand: 'COSCELL',
        name: 'GREEN PAPAYA PDRN AMPOULE',
        description: 'A concentrated ampoule that refines pores and smooths texture using PDRN.',
        imageUrl: getDriveUrl('1HD11vzXvT4jbk7b7wkOhmv1uHYMb4lhg'),
        subNeed: ['green_papaya'],
        tags: ['PDRN', 'PoreCare'],
        translations: {
            [Language.ES]: { name: 'AMPOLLA PAPAYA PDRN', description: 'Minimiza los poros y redefine la textura de la piel con PDRN vegetal.' },
            [Language.JP]: { name: 'グリーンパパイヤPDRN毛穴アンプル', description: '毛穴の目立ちを抑え、なめらかな肌質へ整える集中美容液。' },
            [Language.ME]: { name: 'أمبولة البابايا PDRN', description: 'أمبولة مركزة لتصغير المسام وتحسين ملمس البشرة بتقنية PDRN.' },
            [Language.FR]: { name: 'AMPOULE PAPAYE PDRN', description: 'Ampoule concentrée pour affiner les pores et lisser le grain de peau.' },
            [Language.DE]: { name: 'GRÜNE PAPAYA AMPOULE', description: 'Konzentrat zur Porenverfeinerung und Hautglättung auf PDRN-Basis.' }
        }
    },
    {
        id: 'coscell-papaya-foam',
        brand: 'COSCELL',
        name: 'GREEN PAPAYA GOMAGE FOAM',
        description: 'Exfoliating foam that removes impurities while refining skin texture.',
        imageUrl: getDriveUrl('1EtxDxKCrFp9LemmU96kJC3T8Z6Btr1uq'),
        subNeed: ['green_papaya'],
        tags: ['Gomage', 'Smooth'],
        translations: {
            [Language.ES]: { name: 'GREEN PAPAYA GOMAGE FOAM', description: 'Exfoliación suave que elimina impurezas y deja la piel aterciopelada.' },
            [Language.JP]: { name: 'グリーンパパイヤPDRNゴマージュフォーム', description: '古い角質を優しくオフ。洗うたびに透明感あふれる素肌へ。' },
            [Language.ME]: { name: 'رغوة البابايا المقشرة', description: 'رغوة منظفة مقشرة تزيل الشوائب وتنقي سطح البشرة.' },
            [Language.FR]: { name: 'MOUSSE GOMMAGE PAPAYE', description: 'Mousse exfoliante douce pour un teint lisse et clarifié.' },
            [Language.DE]: { name: 'GREEN PAPAYA PEELINGSCHAUM', description: 'Verfeinernder Peelingschaum für ein seidig glattes Hautgefühl.' }
        }
    },
    {
        id: 'coscell-vita-cream',
        brand: 'COSCELL',
        name: 'VITA CAPSULE CREAM',
        description: 'Encapsulated vitamin C gel cream that restores radiance and vitality.',
        imageUrl: getDriveUrl('18g7V9hQupIkPn4XQdjVBksd-TWwutNgG'),
        subNeed: ['vita_line'],
        tags: ['VitaC', 'Bright'],
        translations: {
            [Language.ES]: { name: 'VITA CAPSULE CREAM', description: 'Crema en gel con cápsulas de Vitamina C pura para una piel luminosa.' },
            [Language.JP]: { name: 'ビタCカプセルクリーム', description: '高濃度ビタミンCを凝縮。シミやくすみをケアするスペシャルケアアイテム。' },
            [Language.ME]: { name: 'كريم كبسولات فيتا', description: 'كريم جل غني بكبسولات فيتامين سي لاستعادة حيوية البشرة.' },
            [Language.FR]: { name: 'VITA CAPSULE CRÈME', description: "Crème gel aux capsules de vitamines pour restaurer l'éclat." },
            [Language.DE]: { name: 'VITA KAPSEL CREME', description: 'Gel-Creme mit verkapseltem Vitamin C für neue Vitalität und Ausstrahlung.' }
        }
    },
    {
        id: 'coscell-vita-ampoule',
        brand: 'COSCELL',
        name: 'VITA C AMPOULE',
        description: 'High-potency vitamin C ampoule for intensive brightening and dark spot care.',
        imageUrl: getDriveUrl('1AVlFrGRUrje2k9pgcsvMH1V-rBYS-bh6'),
        subNeed: ['vita_line'],
        tags: ['Intensive', 'Glow'],
        translations: {
            [Language.ES]: { name: 'VITA C AMPOULE', description: 'Ampolla de Vitamina C de alta potencia para un brillo y claridad intensos.' },
            [Language.JP]: { name: 'ビタCアンプル', description: '高濃度ビタミンCを凝縮。シミやくすみをケアする スペシャルケアアイテム。' },
            [Language.ME]: { name: 'أمبولة فيتا سي', description: 'أمبولة فيتامين سي عالية الفعالية لتفتيح البشرة المكثف.' },
            [Language.FR]: { name: 'AMPOULE VITA C', description: 'Soin concentré à la vitamine C pour un éclat intense.' },
            [Language.DE]: { name: 'VITA C AMPOULE', description: 'Hochkonzentrierte Vitamin-C-Ampulle zur intensiven Aufhellung von Pigmentflecken.' }
        }
    }
];

export const BRAND_INTRODUCE_URL = 'https://drive.google.com/drive/folders/1aj_ywbMoTFFoquVHwGn8Y41ldE0jEPfF?usp=drive_link';

export const getBuyingLink = (language: Language, product: Product | undefined): string => {
    // 1. France -> Paris K Beauty
    if (language === Language.FR) {
        return 'https://pariskbeauty.com/collections/all';
    }

    // 2. Japan -> Qoo10
    if (language === Language.JP) {
        return 'https://www.qoo10.jp/shop/Cosmelabofficial';
    }

    // 3. Germany -> SHR Germany
    if (language === Language.DE) {
        if (product?.brand === 'BERRISOM') return 'https://shr-germany-onlineshop.de/brand/245-berrisom?s=&fix-result=1';
        if (product?.brand === 'G9SKIN') return 'https://shr-germany-onlineshop.de/brand/244-g9skin?s=&fix-result=1';
        if (product?.brand === 'AMILL') return 'https://shr-germany-onlineshop.de/brand/246-amill?s=&fix-result=1';
        if (product?.brand === 'COSCELL') return 'https://shr-germany-onlineshop.de/brand/248-coscell?s=&fix-result=1';
        return 'https://shr-germany-onlineshop.de/';
    }

    // 4. Arabic -> Boutiqaat
    if (language === Language.ME) {
        return 'https://www.boutiqaat.com/en-kw/women/g9-skin';
    }

    // 5. Group 1: English, Spanish, Russian, Greek -> Amazon
    if ([Language.US, Language.ES, Language.RU, Language.EL].includes(language)) {
        const brand = product?.brand;
        if (brand === 'BERRISOM') return 'https://www.amazon.com/s?srs=9400023011';
        if (brand === 'G9SKIN') return 'https://www.amazon.com/g9skin/s?k=g9skin';
        if (brand === 'AMILL') return 'https://www.amazon.com/stores/AmillOfficial/page/01AE994B-2102-4BA6-B89E-DB2A113070C1';
        if (brand === 'COSCELL') return 'https://www.amazon.com/s?k=coscell&i=beauty&crid=1A8TMANOH3WB&sprefix=co%2Cbeauty%2C771&ref=nb_sb_noss_2';
    }

    return '#';
};
