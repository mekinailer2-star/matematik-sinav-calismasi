var questions = [
    {
        id: 1,
        topic: "Sureklilik",
        title: "Parcali Fonksiyonda Sureklilik",
        question: "\\(f(x) = \\begin{cases} 2x+b, & x < -1 \\\\ -2, & x = -1 \\\\ x^2 - a, & x > -1 \\end{cases}\\) fonksiyonu her reel sayi degeri icin surekli olduguna gore, \\(a+b\\) toplami kactir?",
        steps: [
            {
                title: "Adim 1: Sol Limiti Bulalim",
                content: "\\(x = -1\\) noktasinda sol limit:\n$$\\lim_{x \\to -1^{-}} f(x) = 2(-1) + b = -2 + b$$"
            },
            {
                title: "Adim 2: Fonksiyon Degeri",
                content: "\\(x = -1\\) noktasinda:\n$$f(-1) = -2$$"
            },
            {
                title: "Adim 3: Sag Limiti Bulalim",
                content: "\\(x = -1\\) noktasinda sag limit:\n$$\\lim_{x \\to -1^{+}} f(x) = (-1)^2 - a = 1 - a$$"
            },
            {
                title: "Adim 4: Sureklilik Kosullarini Uygulayalim",
                content: "Sureklilik icin sol limit = f(-1) = sag limit olmali.\n\nSol limit = f(-1):\n$$-2 + b = -2 \\implies b = 0$$\n\nSag limit = f(-1):\n$$1 - a = -2 \\implies a = 3$$"
            }
        ],
        result: "$$a + b = 3 + 0 = \\boxed{3}$$"
    },
    {
        id: 2,
        topic: "Turev Kavrami",
        title: "Limit ile Turev Tanimi",
        question: "\\(f(x) = x^2 - 2x\\) fonksiyonu veriliyor. \\(\\displaystyle\\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2}\\) limitinin degeri kactir?",
        steps: [
            {
                title: "Adim 1: Bu Limit Turev Tanimidir",
                content: "$$\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = f'(a)$$\nBurada \\(a = 2\\), yani \\(f'(2)\\) yi ariyoruz."
            },
            {
                title: "Adim 2: f(2) Degerini Bulalim",
                content: "$$f(2) = (2)^2 - 2(2) = 4 - 4 = 0$$"
            },
            {
                title: "Adim 3: Limiti Hesaplayalim",
                content: "$$\\lim_{x \\to 2} \\frac{x^2 - 2x - 0}{x - 2} = \\lim_{x \\to 2} \\frac{x(x - 2)}{x - 2} = \\lim_{x \\to 2} x = 2$$"
            },
            {
                title: "Adim 4: Dogrulama",
                content: "\\(f'(x) = 2x - 2\\) ise:\n$$f'(2) = 2(2) - 2 = 2 \\checkmark$$"
            }
        ],
        result: "$$\\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2} = \\boxed{2}$$"
    },
    {
        id: 3,
        topic: "Turevlenebilirlik",
        title: "Grafikten Turev Analizi",
        question: "\\(f: [-5, 5] \\to \\mathbb{R}\\) tanimi \\(f(x)\\) fonksiyonunun grafigine gore, \\((-5, 5)\\) acik araliginda kac farkli noktada turevi kesinlikle yoktur?",
        steps: [
            {
                title: "Adim 1: Turev Olmayan Durumlar",
                content: "Turev su durumlarda yoktur:\n\n1. Keskin kose noktalari (sag ve sol turev farkli)\n\n2. Sureksizlik noktalari (fonksiyon tanimsiz veya sicrama var)\n\n3. Dikey teget noktalari"
            },
            {
                title: "Adim 2: Grafigi Inceleyelim",
                content: "Grafige baktigimizda:\n\n\\(x = -4\\): Acik daire var, fonksiyon bu noktada sureksiz, turev yok\n\n\\(x = 0\\): Keskin kose noktasi var, turev yok\n\n\\(x = 3\\): Acik daire var, fonksiyon bu noktada sureksiz, turev yok"
            },
            {
                title: "Adim 3: Sayalim",
                content: "Toplamda 3 noktada turev kesinlikle yoktur:\n$$x = -4, \\quad x = 0, \\quad x = 3$$"
            }
        ],
        result: "Turev kesinlikle olmayan nokta sayisi = $$\\boxed{3}$$"
    },
    {
        id: 4,
        topic: "Turev Kurallari",
        title: "Bolum ve Kok Turevi",
        question: "\\(f(x) = \\dfrac{x - 2}{x^2 + 2}\\) ve \\(p(x) = \\dfrac{3\\sqrt{x}}{2}\\) fonksiyonlari veriliyor. \\(f'(1) + p'(2)\\) degerini bulunuz.",
        steps: [
            {
                title: "Adim 1: f'(x) icin Bolum Kurali",
                content: "$$f'(x) = \\frac{(x^2 + 2) \\cdot 1 - (x - 2) \\cdot 2x}{(x^2 + 2)^2}$$\nPayi acalim:\n$$= \\frac{x^2 + 2 - 2x^2 + 4x}{(x^2 + 2)^2} = \\frac{-x^2 + 4x + 2}{(x^2 + 2)^2}$$"
            },
            {
                title: "Adim 2: f'(1) Hesaplayalim",
                content: "$$f'(1) = \\frac{-(1)^2 + 4(1) + 2}{((1)^2 + 2)^2} = \\frac{-1 + 4 + 2}{(3)^2} = \\frac{5}{9}$$"
            },
            {
                title: "Adim 3: p'(x) Bulalim",
                content: "\\(p(x) = \\frac{3}{2} \\cdot x^{1/2}\\) seklinde yazarsak:\n$$p'(x) = \\frac{3}{2} \\cdot \\frac{1}{2} x^{-1/2} = \\frac{3}{4\\sqrt{x}}$$"
            },
            {
                title: "Adim 4: p'(2) Hesaplayalim",
                content: "$$p'(2) = \\frac{3}{4\\sqrt{2}} = \\frac{3\\sqrt{2}}{8}$$"
            },
            {
                title: "Adim 5: Toplami Bulalim",
                content: "$$f'(1) + p'(2) = \\frac{5}{9} + \\frac{3\\sqrt{2}}{8} = \\frac{40 + 27\\sqrt{2}}{72}$$"
            }
        ],
        result: "$$f'(1) + p'(2) = \\dfrac{40 + 27\\sqrt{2}}{72}$$"
    },
    {
        id: 5,
        topic: "Turev Kurallari",
        title: "Ikinci Turev Hesabi",
        question: "\\(f(x) = x^2(x^3 - 4)\\) fonksiyonuna gore \\(\\dfrac{d^2f(x)}{dx^2}\\) ifadesinin \\(x = 1\\) noktasindaki degerini bulunuz.",
        steps: [
            {
                title: "Adim 1: Fonksiyonu Acalim",
                content: "$$f(x) = x^2(x^3 - 4) = x^5 - 4x^2$$"
            },
            {
                title: "Adim 2: Birinci Turevi Alalim",
                content: "$$f'(x) = 5x^4 - 8x$$"
            },
            {
                title: "Adim 3: Ikinci Turevi Alalim",
                content: "$$f''(x) = 20x^3 - 8$$"
            },
            {
                title: "Adim 4: x = 1 icin Hesaplayalim",
                content: "$$f''(1) = 20(1)^3 - 8 = 20 - 8 = 12$$"
            }
        ],
        result: "$$f''(1) = \\boxed{12}$$"
    },
    {
        id: 6,
        topic: "Artan / Azalan",
        title: "Artan ve Azalan Araliklarin Bulunmasi",
        question: "\\(f(x) = x^3 - x^2 + 2\\) fonksiyonunun artan ve azalan oldugu araliklari bulunuz.",
        steps: [
            {
                title: "Adim 1: Birinci Turevi Alalim",
                content: "$$f'(x) = 3x^2 - 2x$$"
            },
            {
                title: "Adim 2: Kritik Noktalari Bulalim",
                content: "$$f'(x) = 0$$\n$$3x^2 - 2x = 0$$\n$$x(3x - 2) = 0$$\n$$x = 0 \\quad \\text{veya} \\quad x = \\frac{2}{3}$$"
            },
            {
                title: "Adim 3: Isaret Tablosu",
                content: "\\((-\\infty, 0)\\) araliginda: \\(f'(x) > 0\\) (Artan)\n\n\\((0, \\frac{2}{3})\\) araliginda: \\(f'(x) < 0\\) (Azalan)\n\n\\((\\frac{2}{3}, +\\infty)\\) araliginda: \\(f'(x) > 0\\) (Artan)"
            },
            {
                title: "Adim 4: Sonuc",
                content: "Artan: \\((-\\infty, 0) \\cup \\left(\\frac{2}{3}, +\\infty\\right)\\)\n\nAzalan: \\(\\left(0, \\frac{2}{3}\\right)\\)"
            }
        ],
        result: "Artan: \\((-\\infty, 0) \\cup \\left(\\frac{2}{3}, +\\infty\\right)\\), Azalan: \\(\\left(0, \\frac{2}{3}\\right)\\)"
    },
    {
        id: 7,
        topic: "Maksimum / Minimum",
        title: "Dikdortgenin Maksimum Alani",
        question: "\\(y = -3x^2 + 9\\) parabolunun altinda, x ekseninin ustunde yer alan ABCD dikdortgeninin alani maksimum kac birim kare olur?",
        steps: [
            {
                title: "Adim 1: Dikdortgeni Modelleyelim",
                content: "Parabol \\(y = -3x^2 + 9\\) y eksenine gore simetriktir.\n\nDikdortgenin sag ust kosesi \\((x, -3x^2 + 9)\\) noktasindadir."
            },
            {
                title: "Adim 2: Alan Fonksiyonunu Yazalim",
                content: "Genislik = \\(2x\\), Yukseklik = \\(-3x^2 + 9\\)\n$$A(x) = 2x \\cdot (-3x^2 + 9) = -6x^3 + 18x$$"
            },
            {
                title: "Adim 3: Turevi Alip Sifira Esitleyelim",
                content: "$$A'(x) = -18x^2 + 18 = 0$$\n$$x^2 = 1 \\implies x = 1$$\n(\\(x > 0\\) olmali)"
            },
            {
                title: "Adim 4: Maksimum Alani Hesaplayalim",
                content: "$$A(1) = -6(1)^3 + 18(1) = -6 + 18 = 12$$\n\nIkinci turev kontrolu:\n$$A''(x) = -36x \\implies A''(1) = -36 < 0 \\quad \\text{(Maksimum)} \\checkmark$$"
            }
        ],
        result: "Maksimum alan = $$\\boxed{12}$$ birim kare"
    },
    {
        id: 8,
        topic: "Maksimum / Minimum",
        title: "Ucgenin Maksimum Alani",
        question: "\\(y = 6x - x^2\\) parabolu uzerinde A noktasi, O(0,0) ve B(6,0) noktalari ile OBA ucgeni olusturuluyor. Bu ucgenin alani en buyuk oldugu A noktasinin apsisi kactir?",
        steps: [
            {
                title: "Adim 1: Parabolun x Kesisimlerini Bulalim",
                content: "$$y = 6x - x^2 = x(6 - x) = 0$$\n$$x = 0 \\quad \\text{veya} \\quad x = 6$$\nYani \\(O(0, 0)\\) ve \\(B(6, 0)\\) parabolin x-kesisimleridir."
            },
            {
                title: "Adim 2: A Noktasini Tanimlayalim",
                content: "A noktasi parabol uzerinde oldugundan:\n$$A(t, \\; 6t - t^2) \\quad (0 < t < 6)$$"
            },
            {
                title: "Adim 3: Ucgen Alanini Yazalim",
                content: "OB tabani = 6 birim, Yukseklik = A noktasinin y koordinati = \\(6t - t^2\\)\n$$\\text{Alan} = \\frac{1}{2} \\cdot 6 \\cdot (6t - t^2) = 18t - 3t^2$$"
            },
            {
                title: "Adim 4: Turevi Alip Sifira Esitleyelim",
                content: "$$A'(t) = 18 - 6t = 0$$\n$$t = 3$$"
            },
            {
                title: "Adim 5: Maksimum Kontrolu",
                content: "$$A''(t) = -6 < 0 \\quad \\text{(Maksimum)} \\checkmark$$\nMaksimum alan:\n$$A(3) = 18(3) - 3(9) = 54 - 27 = 27 \\text{ birim kare}$$"
            }
        ],
        result: "A noktasinin apsisi = $$\\boxed{3}$$"
    }
];
