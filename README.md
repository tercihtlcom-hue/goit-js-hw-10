# GoIT JavaScript Homework 10 - Asynchronous JS

Bu proje, JavaScript'te asenkron programlama, zamanlayıcılar (Timers) ve Promise
yapılarının kullanımını pekiştirmek amacıyla hazırlanmıştır. Proje içinde iki
temel uygulama bulunmaktadır: Geri Sayım Zamanlayıcı ve Promise Üreteci.

## 🚀 Canlı Demo

Projenin canlı sürümüne buradan ulaşabilirsiniz:
[https://<KULLANICI_ADIN>.github.io/<DEPO_ADIN>/](https://<KULLANICI_ADIN>.github.io/<DEPO_ADIN>/)

## 🛠️ Teknik Özellikler ve Kütüphaneler

- **Vite:** Proje yapılandırması ve paketleme için kullanıldı.
- **flatpickr:** Tarih ve saat seçimi için entegre edildi.
- **iziToast:** Kullanıcıya şık bildirimler (hata/başarı mesajları) göstermek
  için kullanıldı.
- **Modern JS:** `async/await` mantığı, `Promises`, `setInterval` ve
  `padStart()` metotları aktif olarak kullanıldı.

## 📂 Görev Detayları

### 1. Geri Sayım Zamanlayıcı (Timer)

- Kullanıcı `flatpickr` aracılığıyla gelecekteki bir tarihi seçer.
- Geçmiş bir tarih seçildiğinde sistem hata verir ve "Start" butonu devre dışı
  kalır.
- Geri sayım başladığında arayüz her saniye `xx:xx:xx:xx` formatında (gün, saat,
  dakika, saniye) güncellenir.
- Süre sona erdiğinde zamanlayıcı otomatik olarak durur.

### 2. Promise Üreteci (Snackbar)

- Kullanıcıdan bir gecikme süresi (ms) ve Promise'in sonucu (başarılı/hatalı)
  alınır.
- Form gönderildiğinde belirtilen süre kadar beklenir ve ardından `iziToast` ile
  sonuç bildirilir.
- `then` ve `catch` blokları ile asenkron süreçler yönetilir.

## 🔧 Kurulum ve Çalıştırma

1. Projeyi yerel makinenize klonlayın:
   ```bash
   git clone [https://github.com/](https://github.com/)<KULLANICI_ADIN>/<DEPO_ADIN>.git
   ```
