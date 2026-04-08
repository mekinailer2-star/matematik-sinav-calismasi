const questions = [
  {
    id: 1,
    topic: "Sureklilik",
    title: "Parcali Fonksiyonda Sureklilik",
    question: `\\(f(x) = \\begin{cases} 2x+b, & x < -1 \\\\ -2, & x = -1 \\\\ x^2 - a, & x > -1 \\end{cases}\\) fonksiyonu her reel sayi degeri icin surekli olduguna gore, \\(a+b\\) toplami kactir?`,
    steps: [
      {
        title: "Adim 1: Sol Limiti Bulalim",
        content: `\\(x = -1\\) noktasinda sol limit:<br>
        \\[\\lim_{x \\to -1^{-}} f(x) = \\lim_{x \\to -1^{-}} (2x + b) = 2(-1) + b = -2 + b\\]`
      },
      {
        title: "Adim 2: Fonksiyon Degeri",
        content: `\\(x = -1\\) noktasinda fonksiyon degeri:<br>
        \\[f(-1) = -2\\]`
      },
      {
        title: "Adim 3: Sag Limiti Bulalim",
        content: `\\(x = -1\\) noktasinda sag limit:<br>
        \\[\\lim_{x \\to -1^{+}} f(x) = \\lim_{x \\to -1^{+}} (x^2 - a) = (-1)^2 - a = 1 - a\\]`
      },
      {
        title: "Adim 4: Sureklilik Kosullarini Uygulayalim",
        content: `Sureklilik icin sol limit = fonksiyon degeri = sag limit olmalidir.<br><br>
        <strong>Sol limit = f(-1):</strong><br>
        \\[-2 + b = -2 \\implies b = 0\\]<br>
        <strong>Sag limit = f(-1):</strong><br>
        \\[1 - a = -2 \\implies a = 3\\]`
      }
    ],
    result: "\\(a + b = 3 + 0 = \\boxed{3}\\)"
  },
  {
    id: 2,
    topic: "Turev Kavrami",
    title: "Limit ile Turev Tanimi",
    question: `\\(f: \\mathbb{R} \\to \\mathbb{R}\\), \\(f(x) = x^2 - 2x\\) fonksiyonu veriliyor. Buna gore \\(\\displaystyle\\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2}\\) limitinin degeri kactir?`,
    steps: [
      {
        title: "Adim 1: Bu Limitin Anlamini Kavrayalim",
        content: `Bu limit, turev taniminin ta kendisidir:<br>
        \\[\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = f'(a)\\]
        Burada \\(a = 2\\) dir, yani \\(f'(2)\\) yi ariyoruz.`
      },
      {
        title: "Adim 2: f(2) Degerini Bulalim",
        content: `\\[f(2) = (2)^2 - 2(2) = 4 - 4 = 0\\]`
      },
      {
        title: "Adim 3: Limiti Hesaplayalim",
        content: `\\[\\lim_{x \\to 2} \\frac{x^2 - 2x - 0}{x - 2} = \\lim_{x \\to 2} \\frac{x(x - 2)}{x - 2}\\]
        \\(x \\neq 2\\) icin sadelestirirsek:<br>
        \\[= \\lim_{x \\to 2} x = 2\\]`
      },
      {
        title: "Adim 4: Dogrulama (Turev ile)",
        content: `\\(f(x) = x^2 - 2x\\) ise \\(f'(x) = 2x - 2\\)<br>
        \\[f'(2) = 2(2) - 2 = 2 \\checkmark\\]`
      }
    ],
    result: "\\(\\displaystyle\\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2} = \\boxed{2}\\)"
  },
  {
    id: 3,
    topic: "Turevlenebilirlik",
    title: "Grafikten Turev Analizi",
    question: `\\(f: [-5, 5] \\to \\mathbb{R}\\) tanimi \\(f(x)\\) fonksiyonunun grafigine gore, \\((-5, 5)\\) acik araliginda kac farkli teget degeri icin turevi kesinlikle yoktur?<br><br><img src="icons/graph-soru3.svg" alt="f(x) fonksiyonunun grafigi" style="width:100%;max-width:400px;border-radius:8px;margin:12px 0;">`,
    steps: [
      {
        title: "Adim 1: Turev Olmayan Noktalar",
        content: `Turev su durumlarda yoktur:<br>
        <strong>1.</strong> Keskin kose noktalari (sag ve sol turev farkli)<br>
        <strong>2.</strong> Sureksizlik noktalari (fonksiyon tanimsiz veya sicrma var)<br>
        <strong>3.</strong> Dikey teget noktalari`
      },
      {
        title: "Adim 2: Grafigi Inceleyelim",
        content: `<img src="icons/graph-soru3.svg" alt="Grafik analizi" style="width:100%;max-width:400px;border-radius:8px;margin:12px 0;"><br>
        Grafige baktigimizda:<br>
        <strong>x = -4:</strong> Acik daire var, fonksiyon bu noktada sureksiz &rarr; turev yok<br>
        <strong>x = 0:</strong> Keskin kose noktasi var &rarr; turev yok<br>
        <strong>x = 3:</strong> Acik daire var, fonksiyon bu noktada sureksiz &rarr; turev yok`
      },
      {
        title: "Adim 3: Sayalim",
        content: `Toplamda <strong>3 noktada</strong> turev kesinlikle yoktur:<br>
        \\(x = -4, \\quad x = 0, \\quad x = 3\\)`
      }
    ],
    result: "Turev kesinlikle olmayan nokta sayisi = \\(\\boxed{3}\\)"
  },
  {
    id: 4,
    topic: "Turev Kurallari",
    title: "Bolum ve Kok Turevi",
    question: `\\(f(x) = \\dfrac{x - 2}{x^2 + 2}\\) ve \\(p(x) = \\dfrac{3\\sqrt{x}}{2}\\) fonksiyonlari veriliyor. Buna gore \\(f'(1) + p'(2)\\) degerini bulunuz.`,
    steps: [
      {
        title: "Adim 1: f'(x) icin Bolum Kuralini Uygulayalim",
        content: `\\(f(x) = \\dfrac{x - 2}{x^2 + 2}\\) icin bolum kurali:<br>
        \\[f'(x) = \\frac{(x^2 + 2) \\cdot 1 - (x - 2) \\cdot 2x}{(x^2 + 2)^2}\\]
        Pay'i acalim:<br>
        \\[= \\frac{x^2 + 2 - 2x^2 + 4x}{(x^2 + 2)^2} = \\frac{-x^2 + 4x + 2}{(x^2 + 2)^2}\\]`
      },
      {
        title: "Adim 2: f'(1) Hesaplayalim",
        content: `\\[f'(1) = \\frac{-(1)^2 + 4(1) + 2}{((1)^2 + 2)^2} = \\frac{-1 + 4 + 2}{(3)^2} = \\frac{5}{9}\\]`
      },
      {
        title: "Adim 3: p'(x) Bulalim",
        content: `\\(p(x) = \\dfrac{3}{2} \\cdot x^{1/2}\\) seklinde yazarsak:<br>
        \\[p'(x) = \\frac{3}{2} \\cdot \\frac{1}{2} x^{-1/2} = \\frac{3}{4\\sqrt{x}}\\]`
      },
      {
        title: "Adim 4: p'(2) Hesaplayalim",
        content: `\\[p'(2) = \\frac{3}{4\\sqrt{2}} = \\frac{3}{4\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{8}\\]`
      },
      {
        title: "Adim 5: Toplami Bulalim",
        content: `\\[f'(1) + p'(2) = \\frac{5}{9} + \\frac{3\\sqrt{2}}{8}\\]
        Ortak payda \\(72\\):<br>
        \\[= \\frac{40}{72} + \\frac{27\\sqrt{2}}{72} = \\frac{40 + 27\\sqrt{2}}{72}\\]`
      }
    ],
    result: "\\(f'(1) + p'(2) = \\dfrac{40 + 27\\sqrt{2}}{72}\\)"
  },
  {
    id: 5,
    topic: "Turev Kurallari",
    title: "Ikinci Turev Hesabi",
    question: `\\(f(x) = x^2(x^3 - 4)\\) seklinde verilen \\(f\\) fonksiyonuna gore \\(\\dfrac{d^2f(x)}{dx^2}\\) ifadesinin \\(x = 1\\) noktasindaki degerini bulunuz.`,
    steps: [
      {
        title: "Adim 1: Fonksiyonu Acalim",
        content: `\\[f(x) = x^2(x^3 - 4) = x^5 - 4x^2\\]`
      },
      {
        title: "Adim 2: Birinci Turevi Alalim",
        content: `\\[f'(x) = 5x^4 - 8x\\]`
      },
      {
        title: "Adim 3: Ikinci Turevi Alalim",
        content: `\\[f''(x) = 20x^3 - 8\\]`
      },
      {
        title: "Adim 4: x = 1 Icin Hesaplayalim",
        content: `\\[f''(1) = 20(1)^3 - 8 = 20 - 8 = 12\\]`
      }
    ],
    result: "\\(f''(1) = \\boxed{12}\\)"
  },
  {
    id: 6,
    topic: "Artan / Azalan",
    title: "Artan ve Azalan Araliklarin Bulunmasi",
    question: `\\(f: \\mathbb{R} \\to \\mathbb{R}\\), \\(f(x) = x^3 - x^2 + 2\\) fonksiyonunun artan ve azalan oldugu araliklari bulunuz.`,
    steps: [
      {
        title: "Adim 1: Birinci Turevi Alalim",
        content: `\\[f'(x) = 3x^2 - 2x\\]`
      },
      {
        title: "Adim 2: Kritik Noktalari Bulalim",
        content: `\\(f'(x) = 0\\) yapalim:<br>
        \\[3x^2 - 2x = 0\\]
        \\[x(3x - 2) = 0\\]
        \\[x = 0 \\quad \\text{veya} \\quad x = \\frac{2}{3}\\]`
      },
      {
        title: "Adim 3: Isaret Tablosu",
        content: `<table style="width:100%; text-align:center; border-collapse:collapse; margin: 10px 0;">
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding:8px;">Aralik</td>
          <td>\\((-\\infty, 0)\\)</td>
          <td>\\((0, \\frac{2}{3})\\)</td>
          <td>\\((\\frac{2}{3}, +\\infty)\\)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding:8px;">\\(f'(x)\\) isareti</td>
          <td style="color:#2ecc71;font-weight:700;">+</td>
          <td style="color:#e94560;font-weight:700;">&minus;</td>
          <td style="color:#2ecc71;font-weight:700;">+</td>
        </tr>
        <tr>
          <td style="padding:8px;">\\(f(x)\\)</td>
          <td style="color:#2ecc71;">Artan</td>
          <td style="color:#e94560;">Azalan</td>
          <td style="color:#2ecc71;">Artan</td>
        </tr>
        </table>`
      },
      {
        title: "Adim 4: Sonuc",
        content: `<strong>Artan:</strong> \\((-\\infty, 0) \\cup \\left(\\frac{2}{3}, +\\infty\\right)\\)<br>
        <strong>Azalan:</strong> \\(\\left(0, \\frac{2}{3}\\right)\\)`
      }
    ],
    result: "Artan: \\((-\\infty, 0) \\cup \\left(\\frac{2}{3}, +\\infty\\right)\\), Azalan: \\(\\left(0, \\frac{2}{3}\\right)\\)"
  },
  {
    id: 7,
    topic: "Maksimum / Minimum",
    title: "Dikdortgenin Maksimum Alani",
    question: `\\(y = -3x^2 + 9\\) parabolunun altinda, x ekseninin ustunde yer alan ABCD dikdortgeninin alani maksimum kac birim kare olur?`,
    steps: [
      {
        title: "Adim 1: Dikdortgeni Modelleyelim",
        content: `Parabol \\(y = -3x^2 + 9\\) simetriktir (y eksenine gore).<br>
        Dikdortgenin alt kenari x ekseninde, ust kenari parabol uzerindedir.<br>
        Dikdortgenin sag ust kosesi \\((x, -3x^2 + 9)\\) noktasindadir.`
      },
      {
        title: "Adim 2: Alan Fonksiyonunu Yazalim",
        content: `Simetri sayesinde:<br>
        <strong>Genislik</strong> = \\(2x\\)<br>
        <strong>Yukseklik</strong> = \\(-3x^2 + 9\\)<br>
        \\[A(x) = 2x \\cdot (-3x^2 + 9) = -6x^3 + 18x\\]`
      },
      {
        title: "Adim 3: Turevi Alip Sifira Esitleyelim",
        content: `\\[A'(x) = -18x^2 + 18 = 0\\]
        \\[-18(x^2 - 1) = 0\\]
        \\[x^2 = 1 \\implies x = 1\\]
        (\\(x > 0\\) olmali)`
      },
      {
        title: "Adim 4: Maksimum Alani Hesaplayalim",
        content: `\\[A(1) = -6(1)^3 + 18(1) = -6 + 18 = 12\\]
        <br>Ikinci turev kontrolu:<br>
        \\[A''(x) = -36x \\implies A''(1) = -36 < 0 \\quad \\text{(Maksimum)} \\checkmark\\]`
      }
    ],
    result: "Maksimum alan = \\(\\boxed{12}\\) birim kare"
  },
  {
    id: 8,
    topic: "Maksimum / Minimum",
    title: "Ucgenin Maksimum Alani",
    question: `\\(y = 6x - x^2\\) parabolu uzerinde A noktasi, O(0,0) ve B(6,0) noktalari ile OBA ucgeni olusturuluyor. Bu ucgenin alani en buyuk oldugu A noktasinin apsisi kactir?`,
    steps: [
      {
        title: "Adim 1: Parabolun x-Kesisimlerini Bulalim",
        content: `\\[y = 6x - x^2 = x(6 - x) = 0\\]
        \\[x = 0 \\quad \\text{veya} \\quad x = 6\\]
        Yani \\(O(0, 0)\\) ve \\(B(6, 0)\\) parabolin x-kesisimleridir.`
      },
      {
        title: "Adim 2: A Noktasini Tanimlayalim",
        content: `A noktasi parabol uzerinde oldugundan:<br>
        \\[A(t, 6t - t^2) \\quad \\text{(} 0 < t < 6 \\text{)}\\]`
      },
      {
        title: "Adim 3: Ucgen Alanini Yazalim",
        content: `OB tabani x ekseni uzerinde ve uzunlugu 6 birimdir.<br>
        Yukseklik = A noktasinin y koordinati = \\(6t - t^2\\)<br>
        \\[\\text{Alan} = \\frac{1}{2} \\cdot 6 \\cdot (6t - t^2) = 3(6t - t^2) = 18t - 3t^2\\]`
      },
      {
        title: "Adim 4: Turevi Alip Sifira Esitleyelim",
        content: `\\[A'(t) = 18 - 6t = 0\\]
        \\[6t = 18 \\implies t = 3\\]`
      },
      {
        title: "Adim 5: Maksimum Kontrolu",
        content: `\\[A''(t) = -6 < 0 \\quad \\text{(Maksimum)} \\checkmark\\]
        Maksimum alan: \\(A(3) = 18(3) - 3(9) = 54 - 27 = 27\\) birim kare`
      }
    ],
    result: "A noktasinin apsisi = \\(\\boxed{3}\\)"
  }
];
