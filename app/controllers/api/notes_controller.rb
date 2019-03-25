class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: Note.all
  end

  def show
    render json: @note
  end

  def create
    render json: Note.new(note_params)
    if note.save
      render json: note 
    else 
      render json: {errors: note.errors message: "sorry wrong page"}, status: 422
    end
  end

  def update
    if note.update(note_params)
      render json: @app
    else 
      render json: {errors: note.errors message: "whoops!", status: 422 }
    end
  end

  def destroy
    @note.destroy
  end

  private 
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:name, :description)
    end
end
