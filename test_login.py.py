# Importa las librerías necesarias
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Configuración del navegador (asegúrate de tener el driver instalado)
driver = webdriver.Chrome()
driver.maximize_window()

# 1. Navegar a la página de login de un sitio de prueba
driver.get("https://www.saucedemo.com/")
print("Página de login cargada exitosamente.")
time.sleep(2) # Pausa para ver la página

# 2. Encontrar los campos de usuario y contraseña y llenarlos
usuario = driver.find_element(By.ID, "user-name")
contrasena = driver.find_element(By.ID, "password")

usuario.send_keys("standard_user")
contrasena.send_keys("secret_sauce")
print("Credenciales ingresadas.")
time.sleep(1)

# 3. Hacer clic en el botón de login
boton_login = driver.find_element(By.ID, "login-button")
boton_login.click()
print("Clic en el botón de login.")
time.sleep(3) # Pausa para la carga

# 4. Validar que la prueba fue exitosa
try:
    # Intenta encontrar un elemento único en la página siguiente, como un encabezado
    header_texto = driver.find_element(By.CLASS_NAME, "app_logo").text
    if "Swag Labs" in header_texto:
        print("✅ ¡Prueba de login exitosa! Se validó el texto en el encabezado.")
    else:
        print("❌ ¡Prueba fallida! El encabezado no es el esperado.")
except Exception as e:
    print("❌ ¡Prueba fallida! No se pudo encontrar el elemento esperado.")

# 5. Cerrar el navegador
driver.quit()
print("Navegador cerrado.")