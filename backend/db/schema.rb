# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_15_160439) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.integer "published_year"
    t.text "description"
    t.string "image_url"
  end

  create_table "notes", force: :cascade do |t|
    t.string "note"
    t.integer "reader_id"
    t.integer "user_collection_id"
  end

  create_table "readers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_collections", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.integer "published_year"
    t.text "description"
    t.string "image_url"
    t.integer "reader_id"
  end

end
