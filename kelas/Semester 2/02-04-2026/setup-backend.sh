#!/bin/bash
# Script setup backend Laravel untuk project profil arsitek
# Jalankan dari folder: /home/kaito/Documents/Kelas-X/kelas/Semester 2/02-04-2026/

BASE="/home/kaito/Documents/Kelas-X/kelas/Semester 2/02-04-2026"
BACKEND="$BASE/backend"

echo "======================================"
echo " Setup Backend Laravel - Profil Arsitek"
echo "======================================"

# 1. Install Composer
echo "[1/5] Menginstall Composer..."
php "$BASE/my-profile/.composer-tmp/composer-setup.php" --install-dir="$BASE" --filename=composer
chmod +x "$BASE/composer"
COMPOSER="$BASE/composer"

# 2. Buat project Laravel
echo "[2/5] Membuat project Laravel..."
cd "$BASE"
"$COMPOSER" create-project laravel/laravel backend --no-interaction --prefer-dist

# 3. Setup database MySQL
echo "[3/5] Membuat database MySQL..."
mysql -u root -e "
CREATE DATABASE IF NOT EXISTS profil_arsitek CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'arsitek_user'@'localhost' IDENTIFIED BY 'arsitek_secret123';
GRANT ALL PRIVILEGES ON profil_arsitek.* TO 'arsitek_user'@'localhost';
FLUSH PRIVILEGES;
" 2>&1 || echo "Gunakan mysql sebagai root: sudo mysql"

# 4. Copy .env dan konfigurasi
echo "[4/5] Mengkonfigurasi .env..."
cp "$BACKEND/.env.example" "$BACKEND/.env"
sed -i 's/DB_DATABASE=laravel/DB_DATABASE=profil_arsitek/' "$BACKEND/.env"
sed -i 's/DB_USERNAME=root/DB_USERNAME=arsitek_user/' "$BACKEND/.env"
sed -i 's/DB_PASSWORD=/DB_PASSWORD=arsitek_secret123/' "$BACKEND/.env"

# Generate app key
cd "$BACKEND"
php artisan key:generate

# 5. Migrate dan seed
echo "[5/5] Menjalankan migrasi dan seeder..."
php artisan migrate --force
php artisan db:seed --force

echo ""
echo "======================================"
echo " Setup selesai!"
echo " Jalankan: cd backend && php artisan serve"
echo "======================================"
