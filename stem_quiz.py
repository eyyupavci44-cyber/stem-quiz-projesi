import time

def clear_screen():
    print("\033[H\033[J", end="")

def print_header(text):
    print("=" * 60)
    print(f"{text:^60}")
    print("=" * 60)

# Quiz Data
quizzes = [
    {
        "topic": "Temel Bilimler (Fizik & Kimya)",
        "threshold": 70,
        "questions": [
            {
                "question": "Suyun kimyasal formülü nedir?",
                "options": ["H2O", "CO2", "O2", "NaCl"],
                "correct_index": 0,
                "explanation": "Su, iki hidrojen ve bir oksijen atomundan oluşur (H2O)."
            },
            {
                "question": "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
                "options": ["Venüs", "Mars", "Jüpiter", "Satürn"],
                "correct_index": 1,
                "explanation": "Mars, yüzeyindeki demir oksit (pas) nedeniyle kırmızımsı bir görünüme sahiptir."
            },
            {
                "question": "Işık hızı yaklaşık olarak saniyede kaç kilometredir?",
                "options": ["100,000 km", "300,000 km", "500,000 km", "1,000,000 km"],
                "correct_index": 1,
                "explanation": "Işık boşlukta saniyede yaklaşık 299,792,458 metre (yaklaşık 300,000 km) yol alır."
            },
             {
                "question": "Atomun merkezinde ne bulunur?",
                "options": ["Elektron", "Proton ve Nötron", "Sadece Proton", "Sadece Nötron"],
                "correct_index": 1,
                "explanation": "Atomun çekirdeği proton ve nötronlardan oluşur, elektronlar ise yörüngede bulunur."
            }
        ]
    },
    {
        "topic": "Teknoloji ve Yazılım",
        "threshold": 70,
        "questions": [
            {
                "question": "Python dilinde ekrana yazı yazdırmak için hangi fonksiyon kullanılır?",
                "options": ["echo()", "write()", "print()", "log()"],
                "correct_index": 2,
                "explanation": "Python'da standart çıktı fonksiyonu print()'tir."
            },
            {
                "question": "Yapay Zeka'nın kısaltması nedir?",
                "options": ["AI", "ML", "VR", "AR"],
                "correct_index": 0,
                "explanation": "Artificial Intelligence (Yapay Zeka) kısaltması AI'dır."
            },
            {
                "question": "Hangi bileşen bilgisayarın 'beyni' olarak kabul edilir?",
                "options": ["RAM", "Hard Disk", "CPU", "GPU"],
                "correct_index": 2,
                "explanation": "CPU (Central Processing Unit - Merkezi İşlem Birimi) bilgisayarın beyni olarak kabul edilir."
            }
        ]
    }
]

def run_quiz():
    total_score = 0
    total_questions_asked = 0
    wrong_answers = []

    print_header("STEM QUIZ'E HOŞGELDİNİZ")
    print("Bilginizi sınamaya hazır mısınız?\n")
    time.sleep(1)

    for level_idx, quiz in enumerate(quizzes):
        level_score = 0
        questions = quiz["questions"]
        print_header(f"Bölüm {level_idx + 1}: {quiz['topic']}")
        
        for q_idx, q in enumerate(questions):
            print(f"\nSoru {q_idx + 1}: {q['question']}")
            for i, opt in enumerate(q['options']):
                print(f"{i + 1}. {opt}")
            
            while True:
                try:
                    user_input = input("\nCevabınız (1-4): ")
                    if not user_input.isdigit():
                        raise ValueError
                    choice = int(user_input) - 1
                    if 0 <= choice < len(q['options']):
                        break
                    else:
                        print("Lütfen geçerli bir seçenek giriniz.")
                except ValueError:
                    print("Lütfen sayısal bir değer giriniz.")

            if choice == q['correct_index']:
                print("\n✅ DOĞRU!")
                level_score += 100 / len(questions)
                total_score += 1
            else:
                print(f"\n❌ YANLIŞ! Doğru cevap: {q['options'][q['correct_index']]}")
                print(f"Açıklama: {q['explanation']}")
                wrong_answers.append({
                    "question": q['question'],
                    "your_answer": q['options'][choice],
                    "correct_answer": q['options'][q['correct_index']],
                    "explanation": q['explanation']
                })
            
            total_questions_asked += 1
            time.sleep(1.5)
        
        print(f"\n--- Bölüm Sonu Puanı: {level_score:.1f} ---")
        
        if level_score < quiz['threshold']:
            print(f"\nÜzgünüm, bir sonraki bölüme geçmek için {quiz['threshold']} puan almanız gerekiyordu.")
            break
        else:
            if level_idx < len(quizzes) - 1:
                print("\nTEBRİKLER! Bir sonraki bölüme geçmeye hak kazandınız.")
                time.sleep(2)
                clear_screen()
            else:
                print("\nTebrikler! Tüm bölümleri tamamladınız.")

    # Final Report
    clear_screen()
    print_header("SONUÇ RAPORU")
    final_percentage = (total_score / total_questions_asked * 100) if total_questions_asked > 0 else 0
    print(f"Toplam Puanınız: {final_percentage:.1f}%")
    
    if wrong_answers:
        print("\n--- Hatalı Cevaplarınız ve Çözümleri ---")
        for item in wrong_answers:
            print(f"\nSoru: {item['question']}")
            print(f"Sizin Cevabınız: {item['your_answer']}")
            print(f"Doğru Cevap: {item['correct_answer']}")
            print(f"Çözüm: {item['explanation']}")
    else:
        print("\nMükemmel! Hiç hatanız yok.")

if __name__ == "__main__":
    try:
        run_quiz()
    except KeyboardInterrupt:
        print("\nÇıkış yapılıyor...")
