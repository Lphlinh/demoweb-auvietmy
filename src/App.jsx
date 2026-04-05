function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-left">
          <div className="badge">CHƯƠNG TRÌNH SONG NGỮ • BILINGUAL EDUCATION</div>

          <h1>
            Học tốt tiếng Anh, phát triển toàn diện,
            <span> chi phí phù hợp cho nhiều gia đình</span>
          </h1>

          <p className="subtitle">
            Môi trường học tập hiện đại, chú trọng tiếng Anh, kỹ năng học tập,
            nề nếp và sự phát triển bền vững của học sinh.
          </p>

          <div className="cta-row">
            <a href="#register" className="btn btn-primary">
              Đăng ký tư vấn
            </a>
            <a href="#overview" className="btn btn-secondary">
              Xem chương trình
            </a>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>98%</h3>
              <p>Phụ huynh hài lòng</p>
            </div>
            <div className="stat-card">
              <h3>2</h3>
              <p>Ngôn ngữ học tập hằng ngày</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Hoạt động trải nghiệm mỗi tháng</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="media-card">
            <div className="media-top">LỚP HỌC MẪU / DEMO CLASSROOM</div>
            <div className="media-main">
              <div className="media-photo">
                <div className="play-circle">▶</div>
              </div>
            </div>
            <div className="media-bottom">
              <div>
                <strong>English + Skills + Values</strong>
                <p>Tiếng Anh, kỹ năng và giá trị sống trong cùng một môi trường học tập.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="overview" id="overview">
        <div className="section-title">
          <p className="mini-title">VÌ SAO PHỤ HUYNH QUAN TÂM</p>
          <h2>3 điểm nhấn để giữ người xem ngay từ 3–5 giây đầu</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Song ngữ rõ ràng</h3>
            <p>
              Nội dung thể hiện định hướng bilingual (song ngữ), giúp phụ huynh
              nhận ra ngay lợi thế tiếng Anh của nhà trường.
            </p>
          </div>

          <div className="feature-card">
            <h3>Hình ảnh học tập hiện đại</h3>
            <p>
              Bố cục ưu tiên hình lớp học, hoạt động tương tác, cảm giác chuyên
              nghiệp và gần gũi.
            </p>
          </div>

          <div className="feature-card">
            <h3>Chi phí phù hợp</h3>
            <p>
              Thông điệp ngắn gọn, tập trung vào hiệu quả học tập và mức đầu tư
              hợp lý cho nhiều gia đình.
            </p>
          </div>
        </div>
      </section>

      <section className="program">
        <div className="section-title">
          <p className="mini-title">CHƯƠNG TRÌNH TIÊU BIỂU</p>
          <h2>Khung nội dung minh họa cho đối tác trường học</h2>
        </div>

        <div className="program-grid">
          <div className="program-card">
            <h3>English Focus</h3>
            <p>
              Tăng cường phản xạ nghe - nói - đọc - viết, học qua hoạt động và
              môi trường sử dụng tiếng Anh tự nhiên.
            </p>
          </div>

          <div className="program-card">
            <h3>Academic Foundation</h3>
            <p>
              Củng cố nền tảng học thuật, nề nếp học tập, tư duy logic và khả
              năng tự học của học sinh.
            </p>
          </div>

          <div className="program-card">
            <h3>Character & Skills</h3>
            <p>
              Rèn kỹ năng giao tiếp, hợp tác, tự tin, trách nhiệm và hành vi học
              đường tích cực.
            </p>
          </div>
        </div>
      </section>

      <section className="register" id="register">
        <div className="register-box">
          <div>
            <p className="mini-title">ĐĂNG KÝ NHẬN THÔNG TIN</p>
            <h2>Sẵn sàng dùng bản demo này để trình bày với đối tác</h2>
            <p>
              Đây là giao diện minh họa. Có thể thay logo, hình ảnh, số liệu,
              video và biểu mẫu đăng ký sau.
            </p>
          </div>

          <form className="register-form">
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Số điện thoại" />
            <input type="email" placeholder="Email" />
            <button type="button" className="btn btn-primary full">
              Gửi đăng ký
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App