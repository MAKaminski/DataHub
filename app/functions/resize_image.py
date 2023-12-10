import os
import re
import time
from PIL import Image
import tkinter as tk
from tkinter import filedialog, simpledialog
import gc


def get_image_path():
    root = tk.Tk()
    root.withdraw()
    image_path = filedialog.askopenfilename()
    return image_path


def get_target_size():
    target_size_mb = simpledialog.askstring("Input", "Enter the target size in MB:")
    target_size_mb = float(target_size_mb) if target_size_mb else 0
    target_size_bytes = target_size_mb * 1024 * 1024
    return target_size_bytes


def get_file_type(ext):
    if ext in ['.jpg', '.jpeg']:
        return 'JPEG'
    elif ext == '.png':
        return 'PNG'
    else:
        return 'UNKNOWN'


def sanitize_filename(filename):
    return re.sub('[^a-zA-Z0-9_]', '_', filename)


def get_save_directory(image_path):
    return os.path.dirname(image_path)


def resize_image(image_path, target_size_bytes):
    directory = get_save_directory(image_path)
    full_filename = os.path.basename(image_path)
    filename, ext = os.path.splitext(full_filename)
    filename = sanitize_filename(filename)
    ext = ext.lower()

    file_type = get_file_type(ext)

    with Image.open(image_path) as img:
        width, height = img.size
        ratio = width / height

        temp_file = os.path.join(directory, "temp" + ext)
        while True:
            img = img.resize((int(width), int(height)), Image.LANCZOS)
            img.save(temp_file, file_type)

            if os.path.getsize(temp_file) <= target_size_bytes or width < 1 or height < 1:
                break

            width = width * 0.9
            height = width / ratio

        timestamp = time.strftime("%Y%m%d-%H%M%S")
        new_filename = f"{directory}/{filename}_{timestamp}{ext}"
        os.rename(temp_file, new_filename)

    # Collect garbage after saving the image
    gc.collect()


def clear_variables(exceptions_list):
    global_vars = [var for var in globals() if var not in exceptions_list and not var.startswith('_')]
    for var in global_vars:
        del globals()[var]


if __name__ == "__main__":
    image_path = get_image_path()
    target_size_bytes = get_target_size()
    resize_image(image_path, target_size_bytes)
    clear_variables(['image_path', 'target_size_bytes'])
