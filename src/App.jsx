import './index.css'
import './App.css'

function App() {
  const zaloLink = 'https://zalo.me/09xxxxxxxx' // Thầy sửa số Zalo ở đây
  const phoneNumber = '09xx.xxx.xxx' // Thầy sửa số điện thoại ở đây

  return (
    <div className="page">
      
      {/* MENU NGANG STICKY */}
      <nav className="sticky-header">
        <div className="nav-container">
          <div className="logo">EVUS.EDU.VN</div>
          <div className="desktop-nav">
            <a href="#gioi-thieu">Giới thiệu</a>
            <a href="#chuong-trinh">Chương trình</a>
            <a href="#vi-sao">Vì sao chọn</a>
            <a href="#thu-vien">Hình ảnh</a>
            <a href="#tuyen-sinh">Tuyển sinh</a>
          </div>
          <div className="nav-cta">
            <a href={zaloLink} className="btn btn-primary" target="_blank" rel="noreferrer">
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION: GIỚI THIỆU */}
      <header className="hero" id="gioi-thieu">
        <div className="hero-left">
          <div className="hero-badge">
            MÔI TRƯỜNG SONG NGỮ THPT • <span>BILINGUAL HIGH SCHOOL EXPERIENCE</span>
          </div>
          <h1>Môi trường song ngữ cho học sinh THPT phát triển học thuật, kỷ luật và bản lĩnh hội nhập</h1>
          <p className="hero-description">
            Trường Âu Việt Mỹ chú trọng tiếng Anh, năng lực học thuật, nề nếp học tập và giá trị sống; giúp học sinh phát triển toàn diện, tự tin bước vào giai đoạn đại học và định hướng nghề nghiệp tương lai.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={zaloLink} target="_blank" rel="noreferrer">Đăng ký tư vấn qua Zalo</a>
            <a className="btn btn-secondary" href="#chuong-trinh">Xem chương trình</a>
          </div>
          <div className="hero-contact">
            <span className="contact-label">Hotline tư vấn:</span>
            <a href={`tel:${phoneNumber}`} className="contact-phone">{phoneNumber}</a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <h3>Môi trường song ngữ</h3>
              <p>Tiếng Anh hiện diện trong học tập, giao tiếp và hoạt động thường ngày.</p>
            </div>
            <div className="stat-card">
              <h3>Kỷ luật & nhân cách</h3>
              <p>Rèn nề nếp, trách nhiệm, thái độ học tập tích cực và tinh thần tự chủ.</p>
            </div>
            <div className="stat-card">
              <h3>Định hướng tương lai</h3>
              <p>Hỗ trợ học sinh chuẩn bị cho đại học, hội nhập và lựa chọn nghề nghiệp.</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="classroom-card">
            <p className="card-label">LỚP HỌC THPT / HIGH SCHOOL CLASSROOM</p>
            <div className="classroom-image hero-image-placeholder">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" alt="Lớp học thực tế" />
              <div className="play-button">▶</div>
            </div>
            <h3>English + Academic Growth + Character</h3>
            <p>Tiếng Anh, năng lực học thuật và phẩm chất được phát triển trong cùng một môi trường học tập có định hướng rõ ràng.</p>
          </div>
        </div>
      </header>

      {/* SECTION: CHƯƠNG TRÌNH */}
      <section className="section" id="chuong-trinh">
        <div className="section-heading">
          <p className="section-tag">CHƯƠNG TRÌNH NỔI BẬT</p>
          <h2>Lộ trình phát triển dành cho học sinh THPT</h2>
          <p>Tập trung vào song ngữ, năng lực học thuật, nề nếp học tập và sự trưởng thành cần thiết cho giai đoạn chuyển tiếp lên đại học.</p>
        </div>
        <div className="program-grid">
          <div className="program-card">
            <h3>English for Real Use</h3>
            <p>Tăng cường khả năng sử dụng tiếng Anh trong học tập, giao tiếp và môi trường hội nhập thực tế.</p>
          </div>
          <div className="program-card">
            <h3>Academic Foundation</h3>
            <p>Củng cố năng lực học thuật, phương pháp học, kỹ năng tự học và khả năng theo đuổi mục tiêu dài hạn.</p>
          </div>
          <div className="program-card">
            <h3>Discipline & Character</h3>
            <p>Xây dựng nề nếp, tinh thần trách nhiệm, thái độ tích cực và bản lĩnh cá nhân của học sinh THPT.</p>
          </div>
        </div>
      </section>

      {/* SECTION: VÌ SAO CHỌN */}
      <section className="section highlight-section" id="vi-sao">
        <div className="section-heading">
          <p className="section-tag">VÌ SAO PHỤ HUYNH QUAN TÂM</p>
          <h2>Không chỉ học tiếng Anh, mà còn học để trưởng thành</h2>
          <p>Một môi trường tốt ở bậc THPT cần giúp học sinh vừa tiến bộ học tập, vừa hình thành thái độ sống, kỹ năng và định hướng tương lai.</p>
        </div>
        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>Môi trường học tập rõ định hướng</h3>
            <p>Học sinh được rèn nề nếp, tính chủ động và sự tập trung trong quá trình học tập hằng ngày.</p>
          </div>
          <div className="benefit-card">
            <h3>Song ngữ gắn với thực hành</h3>
            <p>Tiếng Anh không chỉ là môn học mà là công cụ để mở rộng năng lực học tập và giao tiếp.</p>
          </div>
          <div className="benefit-card">
            <h3>Chuẩn bị cho chặng đường sau THPT</h3>
            <p>Học sinh được phát triển nền tảng để sẵn sàng cho đại học, nghề nghiệp và môi trường hội nhập.</p>
          </div>
        </div>
      </section>

      {/* MỚI THÊM: SECTION THƯ VIỆN ẢNH LƯỚT NGANG */}
      <section className="section" id="thu-vien">
        <div className="section-heading">
          <p className="section-tag">HÌNH ẢNH THỰC TẾ</p>
          <h2>Môi trường học tập tại EVUS</h2>
        </div>
        <div className="image-slider">
          {/* Thầy thay các link Unsplash bằng link ảnh thật của trường nhé */}
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" alt="Hoạt động 1" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" alt="Hoạt động 2" />
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80" alt="Hoạt động 3" />
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" alt="Hoạt động 4" />
        </div>
      </section>

      {/* SECTION: TUYỂN SINH */}
      <section className="section cta-section" id="tuyen-sinh">
        <div className="cta-box">
          <div>
            <p className="section-tag">TƯ VẤN TUYỂN SINH</p>
            <h2>Tìm hiểu môi trường học tập phù hợp cho con ở bậc THPT</h2>
            <p>Kết nối qua Zalo để được tư vấn nhanh về chương trình, môi trường học, định hướng phát triển và thông tin tuyển sinh.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={zaloLink} target="_blank" rel="noreferrer">Nhắn Zalo để được tư vấn</a>
            <a className="btn btn-secondary" href={`tel:${phoneNumber}`}>Gọi ngay: {phoneNumber}</a>
          </div>
        </div>
      </section>

      {/* MỚI THÊM: CỤM NÚT LIÊN HỆ TRÔI (GÓC MÀN HÌNH) */}
      <div className="floating-cta">
        <a href={zaloLink} target="_blank" rel="noreferrer" className="float-btn float-zalo">
          💬 Chat Zalo
        </a>
        <a href={`tel:${phoneNumber}`} className="float-btn float-phone">
          📞 {phoneNumber}
        </a>
      </div>

    </div>
  )
}

export default App